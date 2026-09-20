import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oas4cbcex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oas4cbcex"/>`,
		"fallback": "tabler:share-3",
	});
}

export default Component;
