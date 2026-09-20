import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yct1-hxkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yct1-hxkt"/>`,
		"fallback": "streamline-sharp:translate-text-remix",
	});
}

export default Component;
