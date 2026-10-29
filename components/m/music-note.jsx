import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a11cikskf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a11cikskf"/>`,
		"fallback": "withicons:music-note",
	});
}

export default Component;
