import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in_f27l9g.css';
import '../../css/l/l-21abmhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in_f27l9g secondary"/><path class="l-21abmhq primary"/>`,
		"fallback": "iconaut:tooth-duo",
	});
}

export default Component;
