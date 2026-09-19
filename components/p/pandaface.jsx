import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/par4x9bhq.css';
import '../../css/i/ivsg4dbkt.css';
import '../../css/r/ryz94svvw.css';
import '../../css/f/fg1y5-srt.css';
import '../../css/p/p572u4buk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="par4x9bhq"/><path class="ivsg4dbkt"/><path class="ryz94svvw"/><path class="fg1y5-srt"/><path class="p572u4buk"/>`,
		"fallback": "fxemoji:pandaface",
	});
}

export default Component;
