import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvh_n7eff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary qvh_n7eff"/>`,
		"fallback": "iconaut:tally-2-duotone",
	});
}

export default Component;
