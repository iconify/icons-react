import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npbprc1fp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npbprc1fp"/>`,
		"fallback": "pinhead:water-standpipe-with-handle-and-droplet",
	});
}

export default Component;
