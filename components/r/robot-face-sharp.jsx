import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj93s49bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj93s49bt"/>`,
		"fallback": "pixelarticons:robot-face-sharp",
	});
}

export default Component;
