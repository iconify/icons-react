import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py9hl5bvu.css';
import '../../css/v/v6af_xb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py9hl5bvu"/><path class="v6af_xb-s"/>`,
		"fallback": "circum:shirt",
	});
}

export default Component;
