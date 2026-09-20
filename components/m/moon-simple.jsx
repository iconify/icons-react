import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv74es.css';
import '../../css/s/so-from-62.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv74es"/>`,
		"fallback": "line-md:moon-simple",
	});
}

export default Component;
