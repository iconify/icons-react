import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w80iqw.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w80iqw"/>`,
		"fallback": "line-md:security-filled",
	});
}

export default Component;
