import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd358i0ji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd358i0ji"/>`,
		"fallback": "energy-icons:stop-48",
	});
}

export default Component;
