import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9qxhtbgk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9qxhtbgk"/>`,
		"fallback": "jam:set-forward-square",
	});
}

export default Component;
