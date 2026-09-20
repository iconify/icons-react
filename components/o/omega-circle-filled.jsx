import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9szk7k1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9szk7k1a"/>`,
		"fallback": "reicon:omega-circle-filled",
	});
}

export default Component;
