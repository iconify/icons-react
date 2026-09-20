import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzjpy33mt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzjpy33mt"/>`,
		"fallback": "pinhead:water-standpipe-with-pump-handle-and-droplet",
	});
}

export default Component;
