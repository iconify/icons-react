import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyv_syg-f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyv_syg-f"/>`,
		"fallback": "streamline:phone-ringing-1",
	});
}

export default Component;
