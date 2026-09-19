import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/psxdx4bcl.css';
import '../../css/n/nvevodjmo.css';
import '../../css/s/s7b7bgbvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="psxdx4bcl"/><circle class="nvevodjmo"/><path class="s7b7bgbvx"/></g>`,
		"fallback": "icon-park-solid:videocamera",
	});
}

export default Component;
