import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpkpllb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zpkpllb8g"/>`,
		"fallback": "reicon:minimize-square2-filled",
	});
}

export default Component;
