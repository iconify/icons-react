import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/ji_1lwb7y.css';
import '../../css/v/v71dgib_d.css';
import '../../css/g/gzp2zubus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ji_1lwb7y"/><path class="v71dgib_d"/><path class="gzp2zubus"/></g>`,
		"fallback": "solar:video-frame-2-line-duotone",
	});
}

export default Component;
