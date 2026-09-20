import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko0725l_d.css';
import '../../css/f/fbeaqo8bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko0725l_d"/><path clip-rule="evenodd" class="fbeaqo8bl"/>`,
		"fallback": "stash:search-split-solid",
	});
}

export default Component;
