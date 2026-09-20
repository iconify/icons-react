import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwh4ec31y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwh4ec31y"/>`,
		"fallback": "tabler:maximize-off",
	});
}

export default Component;
