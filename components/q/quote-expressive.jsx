import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udjd37y2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udjd37y2t"/>`,
		"fallback": "nrk:quote-expressive",
	});
}

export default Component;
