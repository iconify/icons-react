import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/i4sitdlur.css';
import '../../css/v/vca6n0zbn.css';
import '../../css/i/i1vbw2wll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="i4sitdlur"/><path class="vca6n0zbn"/><circle class="i1vbw2wll"/></g>`,
		"fallback": "icon-park-outline:sunset",
	});
}

export default Component;
