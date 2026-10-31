import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiwlr94ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiwlr94ke"/>`,
		"fallback": "coolicons:plane-takeoff-side-round",
	});
}

export default Component;
