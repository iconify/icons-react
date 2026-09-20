import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl88n_b7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl88n_b7j"/>`,
		"fallback": "selfhst:m3u-editor-dark",
	});
}

export default Component;
