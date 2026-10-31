import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_ev34b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_ev34b_v"/>`,
		"fallback": "sidekickicons:paint-brush-slash",
	});
}

export default Component;
