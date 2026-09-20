import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvl60l-3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gvl60l-3h"/>`,
		"fallback": "reicon:volleyball",
	});
}

export default Component;
