import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiv92mbuz.css';
import '../../css/f/fu98lubud.css';
import '../../css/o/o32ixwgun.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tiv92mbuz"/><path class="fu98lubud"/><path class="o32ixwgun"/>`,
		"fallback": "carbon:mobile-view",
	});
}

export default Component;
