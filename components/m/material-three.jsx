import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azue8pydx.css';
import '../../css/l/lzncdxb9m.css';
import '../../css/f/fv2nt412f.css';
import '../../css/c/chplzrn1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="azue8pydx"/><path class="lzncdxb9m"/><path clip-rule="evenodd" class="fv2nt412f"/><path class="chplzrn1f"/></g>`,
		"fallback": "icon-park-outline:material-three",
	});
}

export default Component;
