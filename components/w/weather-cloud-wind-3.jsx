import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhiwy_b2g.css';
import '../../css/b/byuk8hbxb.css';
import '../../css/f/f85i14bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhiwy_b2g"/><path class="byuk8hbxb"/><path class="f85i14bwg"/></g>`,
		"fallback": "streamline-ultimate-color:weather-cloud-wind-3",
	});
}

export default Component;
