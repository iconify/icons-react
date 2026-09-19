import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2wfuozej.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGBL1nXbiS)" class="l2wfuozej"/><defs><linearGradient id="SVGBL1nXbiS" x1="-7" x2="4.828" y1="2.656" y2="36.999" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:link-32",
	});
}

export default Component;
