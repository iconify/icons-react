import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fr1i81blz.css';
import '../../css/r/rxd12t4co.css';
import '../../css/r/rcha6sbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fr1i81blz"/><path class="rxd12t4co"/><path class="rcha6sbks"/></g>`,
		"fallback": "streamline-ultimate:single-neutral-folder-box",
	});
}

export default Component;
