import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu-2ao_sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu-2ao_sj"/>`,
		"fallback": "iconaut:more-vertical-solid",
	});
}

export default Component;
