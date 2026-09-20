import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqe_5emhp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqe_5emhp"/>`,
		"fallback": "pinhead:post-box",
	});
}

export default Component;
