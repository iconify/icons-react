import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo-qzvbab.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/butwhqbxs.css';
import '../../css/w/wtfyaokyc.css';
import '../../css/a/aadsuac3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary uo-qzvbab"/><g class="dt0cm9dhy primary"><path class="butwhqbxs"/><path class="wtfyaokyc"/><path class="aadsuac3a"/></g>`,
		"fallback": "iconaut:tape-roll-duo",
	});
}

export default Component;
