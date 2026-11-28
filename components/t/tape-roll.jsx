import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="butwhqbxs"/><path class="wtfyaokyc"/><path class="aadsuac3a"/></g>`,
		"fallback": "iconaut:tape-roll",
	});
}

export default Component;
