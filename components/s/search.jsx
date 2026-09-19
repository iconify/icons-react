import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv2n_6bku.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv2n_6bku"/>`,
		"fallback": "catppuccin:search",
	});
}

export default Component;
