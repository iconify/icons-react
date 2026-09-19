import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx1fzq_8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx1fzq_8r"/>`,
		"fallback": "grommet-icons:lastfm",
	});
}

export default Component;
