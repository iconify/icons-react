import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/ngnbouohf.css';
import '../../css/q/qkn850bsj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="ngnbouohf"/><path class="qkn850bsj"/></g>`,
		"fallback": "icon-park-outline:unlock-one",
	});
}

export default Component;
