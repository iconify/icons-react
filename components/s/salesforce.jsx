import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlcme2bry.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlcme2bry"/>`,
		"fallback": "fa7-brands:salesforce",
	});
}

export default Component;
