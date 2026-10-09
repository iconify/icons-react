import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azix1pzje.css';
import '../../css/j/jdmv1bb_y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azix1pzje"/><path class="jdmv1bb_y"/>`,
		"fallback": "energy-icons:pen-20",
	});
}

export default Component;
