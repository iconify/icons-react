import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5-sr2nuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5-sr2nuu"/>`,
		"fallback": "mdi:relation-only-one-to-only-one",
	});
}

export default Component;
