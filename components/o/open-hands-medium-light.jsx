import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmtdpmbkz.css';
import '../../css/y/yfc905jdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pmtdpmbkz"/><path class="yfc905jdv"/></g>`,
		"fallback": "fluent-emoji-flat:open-hands-medium-light",
	});
}

export default Component;
