import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0tyl5b3k.css';
import '../../css/f/fs0iosbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0tyl5b3k"/><path class="fs0iosbnz"/>`,
		"fallback": "token:oddz",
	});
}

export default Component;
