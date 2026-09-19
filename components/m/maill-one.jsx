import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/q/qvva-ob9s.css';
import '../../css/s/s27jmxbxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="p-3d8dotc"/><path class="qvva-ob9s"/><path class="s27jmxbxs"/></g>`,
		"fallback": "icon-park-outline:maill-one",
	});
}

export default Component;
