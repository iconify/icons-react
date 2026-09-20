import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ouzg359_c.css';
import '../../css/v/vqbuppp9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ouzg359_c"/><path class="vqbuppp9g"/></g>`,
		"fallback": "keyline-icons:volume-sharp-two-tone",
	});
}

export default Component;
