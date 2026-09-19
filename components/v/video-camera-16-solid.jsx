import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aomy0cbes.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aomy0cbes"/>`,
		"fallback": "heroicons:video-camera-16-solid",
	});
}

export default Component;
