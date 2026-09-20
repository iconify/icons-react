import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjx1gv_9g.css';
import '../../css/a/aavawy-uf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjx1gv_9g"/><path class="aavawy-uf"/>`,
		"fallback": "material-icon-theme:jar",
	});
}

export default Component;
