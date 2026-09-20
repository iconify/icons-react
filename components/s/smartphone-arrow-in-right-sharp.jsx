import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfsa7m3yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfsa7m3yq"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-right-sharp",
	});
}

export default Component;
