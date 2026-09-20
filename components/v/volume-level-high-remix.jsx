import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tch5idbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tch5idbxw"/>`,
		"fallback": "streamline-sharp:volume-level-high-remix",
	});
}

export default Component;
