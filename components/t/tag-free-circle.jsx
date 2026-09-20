import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja2n6ac7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja2n6ac7j"/>`,
		"fallback": "streamline-sharp:tag-free-circle",
	});
}

export default Component;
