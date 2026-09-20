import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w40axwd7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w40axwd7g"/>`,
		"fallback": "streamline-sharp:text-style-solid",
	});
}

export default Component;
