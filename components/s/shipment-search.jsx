import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8zq3nb9u.css';
import '../../css/j/j8vzgqi8c.css';
import '../../css/v/vlq40abrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n8zq3nb9u"/><path class="j8vzgqi8c"/><path class="vlq40abrs"/></g>`,
		"fallback": "streamline-ultimate:shipment-search",
	});
}

export default Component;
