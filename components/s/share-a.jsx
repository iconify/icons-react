import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr2-00fdg.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr2-00fdg"/>`,
		"fallback": "fontisto:share-a",
	});
}

export default Component;
