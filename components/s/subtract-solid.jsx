import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_fxveb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_fxveb8s"/>`,
		"fallback": "iconaut:subtract-solid",
	});
}

export default Component;
