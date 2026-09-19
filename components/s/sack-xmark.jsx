import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyxik4bbl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyxik4bbl"/>`,
		"fallback": "fa7-solid:sack-xmark",
	});
}

export default Component;
