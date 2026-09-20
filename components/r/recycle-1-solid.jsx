import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwt369onn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kwt369onn"/>`,
		"fallback": "streamline-sharp:recycle-1-solid",
	});
}

export default Component;
