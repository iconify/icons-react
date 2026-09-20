import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/scllpbenl.css';
import '../../css/s/shm300b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="scllpbenl"/><path class="shm300b9k"/></g>`,
		"fallback": "reicon:tag-user",
	});
}

export default Component;
