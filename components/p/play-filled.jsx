import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhqpdb.css';
import '../../css/s/so-from-38.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhqpdb"/>`,
		"fallback": "line-md:play-filled",
	});
}

export default Component;
