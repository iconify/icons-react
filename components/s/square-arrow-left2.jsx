import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mguys6byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mguys6byt"/>`,
		"fallback": "reicon:square-arrow-left2",
	});
}

export default Component;
