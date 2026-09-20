import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttw2t9byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttw2t9byb"/>`,
		"fallback": "pixelarticons:layout-distribute-vertical",
	});
}

export default Component;
