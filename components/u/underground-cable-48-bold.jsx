import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wymfiej7o.css';
import '../../css/c/cdzww56nj.css';
import '../../css/d/dq4y28bnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wymfiej7o"/><path class="cdzww56nj"/><path class="dq4y28bnt"/>`,
		"fallback": "energy-icons:underground-cable-48-bold",
	});
}

export default Component;
