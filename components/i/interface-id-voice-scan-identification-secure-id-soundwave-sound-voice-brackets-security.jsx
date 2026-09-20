import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v24651w4z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v24651w4z"/>`,
		"fallback": "streamline:interface-id-voice-scan-identification-secure-id-soundwave-sound-voice-brackets-security",
	});
}

export default Component;
