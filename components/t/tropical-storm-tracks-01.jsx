import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r-ehb4f5w.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r-ehb4f5w"/><circle class="gp0egaclj"/></g>`,
		"fallback": "hugeicons:tropical-storm-tracks-01",
	});
}

export default Component;
