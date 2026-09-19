import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7pghdblc.css';
import '../../css/d/ddhwi2bsr.css';
import '../../css/z/zi6wn-bta.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7pghdblc"/><path class="ddhwi2bsr"/><path class="zi6wn-bta"/>`,
		"fallback": "gis:location-poi-o",
	});
}

export default Component;
