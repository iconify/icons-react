import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wofxcnbrt.css';
import '../../css/k/khfw2hbyh.css';
import '../../css/w/wjwwm-bhb.css';
import '../../css/n/nl66y9men.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wofxcnbrt"/><path class="khfw2hbyh"/><path class="wjwwm-bhb wm-k"/><path class="nl66y9men wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:voicemail",
	});
}

export default Component;
