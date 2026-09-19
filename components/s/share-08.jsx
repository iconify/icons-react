import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz2lpeglw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz2lpeglw"/>`,
		"fallback": "hugeicons:share-08",
	});
}

export default Component;
