import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lefpkgb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lefpkgb4g"/>`,
		"fallback": "healthicons:liver-1-outline-24px",
	});
}

export default Component;
