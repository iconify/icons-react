import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbx2oobum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbx2oobum"/>`,
		"fallback": "hugeicons:share-06",
	});
}

export default Component;
