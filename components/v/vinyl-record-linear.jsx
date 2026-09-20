import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gp0egaclj.css';
import '../../css/g/gl48vbckw.css';
import '../../css/n/n0crg69zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="gp0egaclj"/><path class="gl48vbckw"/><path class="n0crg69zm"/></g>`,
		"fallback": "solar:vinyl-record-linear",
	});
}

export default Component;
