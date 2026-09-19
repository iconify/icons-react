import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fl1u8-q9v.css';
import '../../css/n/nqa4qgbqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="fl1u8-q9v"/><circle class="nqa4qgbqu"/></g>`,
		"fallback": "icon-park-solid:rotate-one",
	});
}

export default Component;
