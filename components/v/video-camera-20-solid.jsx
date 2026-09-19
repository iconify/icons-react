import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwy8aw0id.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwy8aw0id"/>`,
		"fallback": "heroicons:video-camera-20-solid",
	});
}

export default Component;
