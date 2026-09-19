import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnwxg_aar.css';
import '../../css/v/v5-1tabpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qnwxg_aar"/><path class="v5-1tabpu"/>`,
		"fallback": "catppuccin:stata",
	});
}

export default Component;
