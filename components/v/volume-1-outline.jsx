import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erav00b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="erav00b8v"/>`,
		"fallback": "cuida:volume-1-outline",
	});
}

export default Component;
