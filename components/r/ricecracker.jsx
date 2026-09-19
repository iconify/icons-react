import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofhjkacrl.css';
import '../../css/g/g53_4wpqu.css';
import '../../css/b/b7ri4q8vc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="ofhjkacrl"/><path class="g53_4wpqu"/><path class="b7ri4q8vc"/>`,
		"fallback": "fxemoji:ricecracker",
	});
}

export default Component;
