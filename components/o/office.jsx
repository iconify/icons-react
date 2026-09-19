import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7f7z9bvd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7f7z9bvd"/>`,
		"fallback": "icomoon-free:office",
	});
}

export default Component;
