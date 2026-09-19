import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbh9_3bgo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbh9_3bgo"/>`,
		"fallback": "catppuccin:semgrep-ignore",
	});
}

export default Component;
