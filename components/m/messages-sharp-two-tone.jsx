import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sfqbvbc6s.css';
import '../../css/w/wnfuxpb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sfqbvbc6s"/><path class="wnfuxpb8x"/></g>`,
		"fallback": "keyline-icons:messages-sharp-two-tone",
	});
}

export default Component;
