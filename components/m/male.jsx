import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vv2dbqbky.css';
import '../../css/g/gl_bwey_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="vv2dbqbky"/><path class="gl_bwey_y"/></g>`,
		"fallback": "streamline-cyber:male",
	});
}

export default Component;
