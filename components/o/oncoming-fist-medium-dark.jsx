import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqdrz1bdh.css';
import '../../css/k/knxq6fbhq.css';
import '../../css/f/f2-j2bcof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wqdrz1bdh"/><path class="knxq6fbhq"/><path class="f2-j2bcof"/></g>`,
		"fallback": "fluent-emoji-flat:oncoming-fist-medium-dark",
	});
}

export default Component;
