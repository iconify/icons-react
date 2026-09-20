import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrh25iopp.css';
import '../../css/p/pghvq5b5v.css';
import '../../css/p/pv0l37rez.css';
import '../../css/e/e9tr3rgac.css';
import '../../css/n/nf_g4naor.css';
import '../../css/v/vguoo3bpu.css';
import '../../css/a/a9a94odrp.css';
import '../../css/a/a_ryq9b-m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrh25iopp"/><path class="pghvq5b5v"/><path class="pv0l37rez"/><path class="e9tr3rgac"/><path class="nf_g4naor"/><path class="vguoo3bpu"/><path class="a9a94odrp"/><path class="a_ryq9b-m"/>`,
		"fallback": "openmoji:patient-file",
	});
}

export default Component;
