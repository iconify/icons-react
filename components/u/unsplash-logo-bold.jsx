import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4fw52b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4fw52b1f"/>`,
		"fallback": "streamline-ultimate:unsplash-logo-bold",
	});
}

export default Component;
