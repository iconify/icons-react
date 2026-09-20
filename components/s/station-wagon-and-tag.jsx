import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt8dwrb2d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt8dwrb2d"/>`,
		"fallback": "pinhead:station-wagon-and-tag",
	});
}

export default Component;
