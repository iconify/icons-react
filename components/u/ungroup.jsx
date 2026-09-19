import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brnnimy3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brnnimy3i"/>`,
		"fallback": "icomoon-free:ungroup",
	});
}

export default Component;
