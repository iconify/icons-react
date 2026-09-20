import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eopb-ub2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eopb-ub2k"/>`,
		"fallback": "ri:painting-ai-fill",
	});
}

export default Component;
