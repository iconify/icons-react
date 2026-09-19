import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/udlaop5uy.css';
import '../../css/m/mid7ym57a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="udlaop5uy"/><path class="mid7ym57a"/></g>`,
		"fallback": "icon-park-outline:teeth",
	});
}

export default Component;
