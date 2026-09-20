import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjqeexs3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yjqeexs3q"/>`,
		"fallback": "streamline-ultimate:video-call-bold",
	});
}

export default Component;
