import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbn7s3nsg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbn7s3nsg"/>`,
		"fallback": "rivet-icons:newspaper-solid",
	});
}

export default Component;
