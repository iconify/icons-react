import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4k91_euc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4k91_euc"/>`,
		"fallback": "noviair:rss-x",
	});
}

export default Component;
