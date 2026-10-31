import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1xz1f56j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1xz1f56j"/>`,
		"fallback": "coolicons:slider-vertical-2-fill-round",
	});
}

export default Component;
