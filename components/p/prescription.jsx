import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wnwrmzb4d.css';
import '../../css/d/d52l-tb8w.css';
import '../../css/f/fbcpkibjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="wnwrmzb4d"/><path class="d52l-tb8w"/><path class="fbcpkibjw"/></g>`,
		"fallback": "icon-park-outline:prescription",
	});
}

export default Component;
