import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/o/o5i_ntbzq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="bwpzy-b4l"/><path class="o5i_ntbzq"/></g>`,
		"fallback": "icon-park-outline:storage-card-two",
	});
}

export default Component;
