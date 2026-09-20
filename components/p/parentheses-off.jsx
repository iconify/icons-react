import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdtry5b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdtry5b6w"/>`,
		"fallback": "tabler:parentheses-off",
	});
}

export default Component;
