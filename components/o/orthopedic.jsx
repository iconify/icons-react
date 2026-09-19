import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jhr6lid9a.css';
import '../../css/f/fs4btdpbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="jhr6lid9a"/><path class="fs4btdpbi"/></g>`,
		"fallback": "icon-park-outline:orthopedic",
	});
}

export default Component;
