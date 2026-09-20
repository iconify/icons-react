import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9i19qzvf.css';
import '../../css/l/ljt80xkva.css';
import '../../css/u/u6nlesboz.css';
import '../../css/t/txqwtca3u.css';
import '../../css/f/fhe3u0b7z.css';
import '../../css/l/l0vmr5b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q9i19qzvf"/><path class="ljt80xkva"/><path class="u6nlesboz"/><path class="txqwtca3u"/><path class="fhe3u0b7z"/><path class="l0vmr5b1h"/></g>`,
		"fallback": "streamline-cyber-color:picture-frame",
	});
}

export default Component;
