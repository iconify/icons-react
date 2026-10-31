import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfd44acxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfd44acxs"/>`,
		"fallback": "coolicons:monitor-play-fill-round",
	});
}

export default Component;
