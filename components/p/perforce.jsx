import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-7kamcdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-7kamcdw"/>`,
		"fallback": "thesvg-color:perforce",
	});
}

export default Component;
