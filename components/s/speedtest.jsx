import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gse48h3rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gse48h3rr"/>`,
		"fallback": "thesvg:speedtest",
	});
}

export default Component;
