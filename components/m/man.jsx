import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg4idkc6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg4idkc6w"/>`,
		"fallback": "reicon:man",
	});
}

export default Component;
