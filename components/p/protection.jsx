import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/c/ca3oflbdp.css';
import '../../css/g/gx8mphfqp.css';
import '../../css/f/fa3pa8bch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ca3oflbdp"/><path class="gx8mphfqp"/><path class="fa3pa8bch"/></g>`,
		"fallback": "icon-park:protection",
	});
}

export default Component;
