import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj_h2eqbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj_h2eqbw"/>`,
		"fallback": "iconaut:shield-info-solid",
	});
}

export default Component;
