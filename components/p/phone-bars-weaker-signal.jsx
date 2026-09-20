import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnnky2uik.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnnky2uik"/>`,
		"fallback": "pinhead:phone-bars-weaker-signal",
	});
}

export default Component;
