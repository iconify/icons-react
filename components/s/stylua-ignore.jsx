import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzl87d67d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzl87d67d"/>`,
		"fallback": "catppuccin:stylua-ignore",
	});
}

export default Component;
