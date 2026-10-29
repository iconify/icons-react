import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/niw7-soza.css';
import '../../css/w/wu7w2tbza.css';
import '../../css/g/g8qulermz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="niw7-soza"/><path class="wu7w2tbza"/><path class="g8qulermz"/></g>`,
		"fallback": "withicons-bauhaus:paint-roller",
	});
}

export default Component;
