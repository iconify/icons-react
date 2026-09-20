import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5489ibkt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5489ibkt"/>`,
		"fallback": "pinhead:pawprint-with-greek-cross",
	});
}

export default Component;
