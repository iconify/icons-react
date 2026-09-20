import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd51t4b3t.css';
import '../../css/p/pruv_t01z.css';
import '../../css/h/hq9csmbih.css';
import '../../css/d/dul3e2wpv.css';
import '../../css/b/bdp-2jbwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gd51t4b3t"><path class="pruv_t01z"/><path class="hq9csmbih"/><path class="dul3e2wpv"/><path class="bdp-2jbwo"/></g>`,
		"fallback": "thesvg-color:mimiclaw",
	});
}

export default Component;
