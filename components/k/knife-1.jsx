import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/j2j_05fna.css';
import '../../css/r/rqdc5szol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="j2j_05fna"/><path class="rqdc5szol"/></g>`,
		"fallback": "streamline-cyber:knife-1",
	});
}

export default Component;
