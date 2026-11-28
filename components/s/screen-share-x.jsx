import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnh8wubts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnh8wubts"/>`,
		"fallback": "noviair-light:screen-share-x",
	});
}

export default Component;
