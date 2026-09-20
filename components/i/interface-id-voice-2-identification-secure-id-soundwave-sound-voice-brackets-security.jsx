import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekb0a1zjf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekb0a1zjf"/>`,
		"fallback": "streamline:interface-id-voice-2-identification-secure-id-soundwave-sound-voice-brackets-security",
	});
}

export default Component;
