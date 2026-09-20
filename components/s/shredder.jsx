import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi_nftbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi_nftbha"/>`,
		"fallback": "keyline-icons:shredder",
	});
}

export default Component;
