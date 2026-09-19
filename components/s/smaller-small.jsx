import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8lr8p0he.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8lr8p0he"/>`,
		"fallback": "dinkie-icons:smaller-small",
	});
}

export default Component;
