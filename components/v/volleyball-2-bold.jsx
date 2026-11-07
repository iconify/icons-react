import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk6whjxer.css';
import '../../css/f/f5wyvtl3b.css';
import '../../css/f/fnd8xqbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk6whjxer"/><path class="f5wyvtl3b"/><path class="fnd8xqbeb"/>`,
		"fallback": "solar:volleyball-2-bold",
	});
}

export default Component;
