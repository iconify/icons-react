import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym4b7ibib.css';
import '../../css/e/ejuejtf0b.css';
import '../../css/r/rn_-vbbno.css';
import '../../css/b/bvkc79bpm.css';
import '../../css/z/znk-rsplj.css';
import '../../css/f/fc9ipfbnw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym4b7ibib"/><path class="ejuejtf0b"/><path class="rn_-vbbno"/><g class="bvkc79bpm"><path class="znk-rsplj"/><path class="fc9ipfbnw"/></g>`,
		"fallback": "flat-color-icons:self-service-kiosk",
	});
}

export default Component;
