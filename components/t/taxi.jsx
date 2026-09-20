import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p3flthqkw.css';
import '../../css/g/g3bft9b2c.css';
import '../../css/n/n65hl0b7v.css';
import '../../css/o/oulf-17tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p3flthqkw"/><path class="g3bft9b2c"/><path class="n65hl0b7v"/><path class="oulf-17tx"/></g>`,
		"fallback": "streamline-ultimate:taxi",
	});
}

export default Component;
