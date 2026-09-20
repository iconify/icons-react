import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azhpgt8pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azhpgt8pr"/>`,
		"fallback": "tabler:math-integrals",
	});
}

export default Component;
