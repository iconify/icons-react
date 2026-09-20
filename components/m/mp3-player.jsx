import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/iz9p36q2i.css';
import '../../css/o/oaizj4bjv.css';
import '../../css/x/xjllsqnue.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="iz9p36q2i"/><path class="oaizj4bjv"/><path class="xjllsqnue"/></g>`,
		"fallback": "marketeq:mp3-player",
	});
}

export default Component;
