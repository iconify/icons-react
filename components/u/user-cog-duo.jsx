import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl0w2q_zw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/az0b6nhta.css';
import '../../css/c/c8bgg3unk.css';
import '../../css/k/k--rt-b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl0w2q_zw secondary"/><g class="dt0cm9dhy primary"><path class="az0b6nhta"/><path class="c8bgg3unk"/><path class="k--rt-b3p"/></g>`,
		"fallback": "iconaut:user-cog-duo",
	});
}

export default Component;
