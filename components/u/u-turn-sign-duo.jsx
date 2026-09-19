import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz4ijodgd.css';
import '../../css/l/liksgb7co.css';
import '../../css/p/p5f4hpmqx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pz4ijodgd"/><path class="liksgb7co"/><path class="p5f4hpmqx"/></g>`,
		"fallback": "glyphs:u-turn-sign-duo",
	});
}

export default Component;
