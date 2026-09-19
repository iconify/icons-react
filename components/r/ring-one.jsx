import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/c9butosut.css';
import '../../css/m/mfsd7w07b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="c9butosut"/><path class="mfsd7w07b"/></g>`,
		"fallback": "icon-park-outline:ring-one",
	});
}

export default Component;
