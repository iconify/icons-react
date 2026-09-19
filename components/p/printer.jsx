import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgoq65bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgoq65bfp"/>`,
		"fallback": "ci:printer",
	});
}

export default Component;
