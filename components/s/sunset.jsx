import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek9_zcc6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek9_zcc6v"/>`,
		"fallback": "feather:sunset",
	});
}

export default Component;
