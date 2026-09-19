import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/q7l4al2od.css';
import '../../css/v/vujmveuaw.css';
import '../../css/z/z7piywbdq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="q7l4al2od"/><path class="vujmveuaw"/><path clip-rule="evenodd" class="z7piywbdq"/></g>`,
		"fallback": "icon-park:music-one",
	});
}

export default Component;
