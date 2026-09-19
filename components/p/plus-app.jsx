import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5vm1ymhp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5vm1ymhp"/>`,
		"fallback": "f7:plus-app",
	});
}

export default Component;
