import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov_j_ngpa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov_j_ngpa"/>`,
		"fallback": "streamline:interface-id-voice-1-identification-secure-id-soundwave-sound-voice-security",
	});
}

export default Component;
