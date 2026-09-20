import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldnzu235l.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldnzu235l"/>`,
		"fallback": "maki:optician-11",
	});
}

export default Component;
