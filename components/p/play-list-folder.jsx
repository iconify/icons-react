import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ymchi-n4a.css';
import '../../css/w/wavo0yb6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ymchi-n4a"/><path class="wavo0yb6n"/></g>`,
		"fallback": "streamline-plump:play-list-folder",
	});
}

export default Component;
