import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4cxyabxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4cxyabxq"/>`,
		"fallback": "streamline-sharp-color:story-post",
	});
}

export default Component;
