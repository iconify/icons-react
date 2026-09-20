import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tanll1bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tanll1bbu"/>`,
		"fallback": "material-icon-theme:razor",
	});
}

export default Component;
