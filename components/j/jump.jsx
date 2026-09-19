import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d6abn8_hs.css';
import '../../css/r/r8r7mgbbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="d6abn8_hs"/><circle class="r8r7mgbbj"/></g>`,
		"fallback": "icon-park-outline:jump",
	});
}

export default Component;
