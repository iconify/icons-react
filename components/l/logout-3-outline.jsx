import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq2w7o_df.css';
import '../../css/i/i742icc9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq2w7o_df"/><path clip-rule="evenodd" class="i742icc9i"/>`,
		"fallback": "solar:logout-3-outline",
	});
}

export default Component;
