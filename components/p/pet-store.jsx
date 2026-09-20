import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jem06bpnh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jem06bpnh"/>`,
		"fallback": "map:pet-store",
	});
}

export default Component;
