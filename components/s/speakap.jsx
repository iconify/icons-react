import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqocp9bvl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqocp9bvl"/>`,
		"fallback": "fa7-brands:speakap",
	});
}

export default Component;
