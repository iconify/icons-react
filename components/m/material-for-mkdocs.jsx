import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yupezqv6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yupezqv6k"/>`,
		"fallback": "thesvg-color:material-for-mkdocs",
	});
}

export default Component;
