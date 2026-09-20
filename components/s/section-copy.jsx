import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf4gkg6yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf4gkg6yi"/>`,
		"fallback": "pixelarticons:section-copy",
	});
}

export default Component;
