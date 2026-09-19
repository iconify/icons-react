import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s3yjbo0qw.css';
import '../../css/h/hoxyj3bqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="s3yjbo0qw"/><path class="hoxyj3bqy"/></g>`,
		"fallback": "icon-park-outline:table-file",
	});
}

export default Component;
