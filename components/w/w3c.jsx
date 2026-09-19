import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg_99vq4p.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg_99vq4p"/>`,
		"fallback": "el:w3c",
	});
}

export default Component;
