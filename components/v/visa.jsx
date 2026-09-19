import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsfw2vjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsfw2vjvg"/>`,
		"fallback": "grommet-icons:visa",
	});
}

export default Component;
