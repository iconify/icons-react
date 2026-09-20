import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb8yt5fzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb8yt5fzg"/>`,
		"fallback": "selfhst:libretranslate-light",
	});
}

export default Component;
