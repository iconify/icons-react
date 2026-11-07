import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ywjc5dv.css';
import '../../css/c/c5w0iq14v.css';
import '../../css/w/wvvwem2de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ywjc5dv"/><path class="c5w0iq14v"/><path class="wvvwem2de"/>`,
		"fallback": "solar:stethoscope-bold-duotone",
	});
}

export default Component;
