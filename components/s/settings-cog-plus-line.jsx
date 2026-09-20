import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bos6iobsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bos6iobsf"/>`,
		"fallback": "majesticons:settings-cog-plus-line",
	});
}

export default Component;
