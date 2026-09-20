import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poe7_bcmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poe7_bcmw"/>`,
		"fallback": "uil:share-alt",
	});
}

export default Component;
