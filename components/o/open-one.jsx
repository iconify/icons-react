import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mf4kxbb7i.css';
import '../../css/k/kqjiyg6lc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mf4kxbb7i"/><circle class="kqjiyg6lc"/></g>`,
		"fallback": "icon-park-solid:open-one",
	});
}

export default Component;
