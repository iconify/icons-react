import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-4fvqbqp.css';
import '../../css/m/m8d3-833c.css';
import '../../css/k/kdnye7bgm.css';
import '../../css/n/nq4hs8b-s.css';
import '../../css/u/u4a8yxbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-4fvqbqp"/><path class="m8d3-833c"/><path class="kdnye7bgm"/><path class="nq4hs8b-s"/><path class="u4a8yxbju"/></g>`,
		"fallback": "streamline-ultimate-color:style-three-pin-factory",
	});
}

export default Component;
