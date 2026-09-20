import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dahkt0btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dahkt0btw"/>`,
		"fallback": "tabler:live-photo-filled",
	});
}

export default Component;
