import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_cez01za.css';
import '../../css/l/l5zd4yydh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o_cez01za"/><path class="l5zd4yydh"/></g>`,
		"fallback": "streamline-ultimate:video-player-laptop",
	});
}

export default Component;
