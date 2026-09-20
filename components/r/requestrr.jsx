import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfxqkpn8s.css';
import '../../css/v/v8fxaabte.css';
import '../../css/b/bi960jquc.css';
import '../../css/c/cwt1opbzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGkO4HLbza" x1="-48.631" x2="-48.161" y1="652.394" y2="651.889" gradientTransform="matrix(597.902 0 0 -556.138 29204.053 362966.813)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sfxqkpn8s"/><stop offset="1" class="v8fxaabte"/></linearGradient><path fill="url(#SVGkO4HLbza)" class="bi960jquc"/><linearGradient id="SVGhUCjAbpd" x1="-47.068" x2="-49.511" y1="650.42" y2="652.536" gradientTransform="matrix(156.129 0 0 -180.282 7787.328 117731.727)" gradientUnits="userSpaceOnUse"><stop offset="0" class="v8fxaabte"/><stop offset=".974" class="sfxqkpn8s"/></linearGradient><path fill="url(#SVGhUCjAbpd)" class="cwt1opbzn"/>`,
		"fallback": "selfhst:requestrr",
	});
}

export default Component;
