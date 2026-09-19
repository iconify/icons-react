import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vohgu1asq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vohgu1asq"/>`,
		"fallback": "foundation:social-delicious",
	});
}

export default Component;
