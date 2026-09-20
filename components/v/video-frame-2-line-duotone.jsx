import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p5-m-nb_s.css';
import '../../css/v/v71dgib_d.css';
import '../../css/v/v0mji9zsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p5-m-nb_s"/><path class="v71dgib_d"/><path class="v0mji9zsz"/></g>`,
		"fallback": "solar:video-frame-2-line-duotone",
	});
}

export default Component;
