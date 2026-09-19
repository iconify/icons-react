import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ac3gokhkl.css';
import '../../css/m/mqgl1bc0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="ac3gokhkl"/><path class="mqgl1bc0v"/></g>`,
		"fallback": "icon-park-solid:key-one",
	});
}

export default Component;
