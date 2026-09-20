import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujctd5tks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujctd5tks"/>`,
		"fallback": "selfhst:plex-photos-dark",
	});
}

export default Component;
