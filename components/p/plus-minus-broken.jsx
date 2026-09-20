import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x0kfgebfc.css';
import '../../css/m/mnqjcr06i.css';
import '../../css/s/sazi09x4s.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x0kfgebfc"/><path class="mnqjcr06i"/><path class="sazi09x4s"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:plus-minus-broken",
	});
}

export default Component;
