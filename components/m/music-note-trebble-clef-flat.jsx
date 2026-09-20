import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddqe97h4r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddqe97h4r"/>`,
		"fallback": "streamline-plump-color:music-note-trebble-clef-flat",
	});
}

export default Component;
