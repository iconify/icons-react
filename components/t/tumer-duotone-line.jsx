import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/p/pxjie85lc.css';
import '../../css/k/kjp6020xm.css';
import '../../css/g/gq-v3ezas.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFmunKbJu"><g class="ukm9jj2re"><circle class="pxjie85lc"/><path class="kjp6020xm"/><path class="gq-v3ezas"/></g></mask></defs><path mask="url(#SVGFmunKbJu)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:tumer-duotone-line",
	});
}

export default Component;
