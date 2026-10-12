import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmx_sxbxs.css';
import '../../css/c/c582bi82c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmx_sxbxs"/><path class="c582bi82c"/>`,
		"fallback": "garden:test-tube-fill-20",
	});
}

export default Component;
