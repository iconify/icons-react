import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/glspuf6tj.css';
import '../../css/j/jjxd41b4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="glspuf6tj"/><path class="jjxd41b4n"/></g>`,
		"fallback": "icon-park-outline:spider-man",
	});
}

export default Component;
