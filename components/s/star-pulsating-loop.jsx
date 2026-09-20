import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp45jb.css';
import '../../css/d/d-t9c80f.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp45jb"/>`,
		"fallback": "line-md:star-pulsating-loop",
	});
}

export default Component;
