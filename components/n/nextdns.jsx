import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iis8z6o6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iis8z6o6w"/>`,
		"fallback": "simple-icons:nextdns",
	});
}

export default Component;
