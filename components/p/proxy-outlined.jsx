import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x60jw3b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x60jw3b1a"/>`,
		"fallback": "eos-icons:proxy-outlined",
	});
}

export default Component;
