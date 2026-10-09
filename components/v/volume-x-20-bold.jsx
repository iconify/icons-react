import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvsucgsri.css';
import '../../css/b/bfzo5mbpj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvsucgsri"/><path class="bfzo5mbpj"/>`,
		"fallback": "energy-icons:volume-x-20-bold",
	});
}

export default Component;
