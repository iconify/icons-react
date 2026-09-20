import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh3gl-b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh3gl-b5v"/>`,
		"fallback": "tabler:play-card-j-filled",
	});
}

export default Component;
