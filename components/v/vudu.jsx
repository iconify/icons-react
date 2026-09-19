import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk5ca9c7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk5ca9c7b"/>`,
		"fallback": "cbi:vudu",
	});
}

export default Component;
