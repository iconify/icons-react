import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtwe4hbwm.css';
import '../../css/g/gqd57kb3d.css';
import '../../css/y/yrkjdvelx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtwe4hbwm"/><path class="gqd57kb3d"/><path class="yrkjdvelx"/>`,
		"fallback": "energy-icons:water-treatment-48",
	});
}

export default Component;
