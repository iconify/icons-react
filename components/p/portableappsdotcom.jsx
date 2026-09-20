import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atu15kb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atu15kb8b"/>`,
		"fallback": "thesvg:portableappsdotcom",
	});
}

export default Component;
