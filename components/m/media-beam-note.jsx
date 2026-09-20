import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqu5qwbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqu5qwbpm"/>`,
		"fallback": "nrk:media-beam-note",
	});
}

export default Component;
