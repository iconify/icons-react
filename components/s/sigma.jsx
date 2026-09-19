import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb8srpzjk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb8srpzjk"/>`,
		"fallback": "icomoon-free:sigma",
	});
}

export default Component;
