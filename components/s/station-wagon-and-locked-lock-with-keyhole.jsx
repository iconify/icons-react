import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbz91mu1r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbz91mu1r"/>`,
		"fallback": "pinhead:station-wagon-and-locked-lock-with-keyhole",
	});
}

export default Component;
