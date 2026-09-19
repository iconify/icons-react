import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kq-ex-9vh.css';
import '../../css/a/ac8pawbch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="kq-ex-9vh"/><path class="ac8pawbch"/></g>`,
		"fallback": "icon-park-outline:swimming-ring",
	});
}

export default Component;
