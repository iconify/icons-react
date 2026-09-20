import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dto5m8b2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dto5m8b2c"/>`,
		"fallback": "streamline-flex:scissors-remix",
	});
}

export default Component;
