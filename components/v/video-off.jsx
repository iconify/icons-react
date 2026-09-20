import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mczdvq7nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mczdvq7nx"/>`,
		"fallback": "pixelarticons:video-off",
	});
}

export default Component;
