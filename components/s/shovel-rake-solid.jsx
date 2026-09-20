import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l51um8ywv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l51um8ywv"/>`,
		"fallback": "streamline-sharp:shovel-rake-solid",
	});
}

export default Component;
