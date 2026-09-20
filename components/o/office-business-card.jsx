import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/erz4xrb_f.css';
import '../../css/d/dj0iu_m5j.css';
import '../../css/f/fhxf8rkwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="erz4xrb_f"/><path class="dj0iu_m5j"/><path class="fhxf8rkwy"/></g>`,
		"fallback": "streamline-freehand:office-business-card",
	});
}

export default Component;
