import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i-css3bia.css';
import '../../css/f/fsqn6obci.css';
import '../../css/d/dak5wlciw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="i-css3bia"/><path clip-rule="evenodd" class="fsqn6obci"/><path class="dak5wlciw"/></g>`,
		"fallback": "icon-park-outline:rocket",
	});
}

export default Component;
