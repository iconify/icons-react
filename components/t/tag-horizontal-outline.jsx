import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9zi6020g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t9zi6020g"/>`,
		"fallback": "solar:tag-horizontal-outline",
	});
}

export default Component;
