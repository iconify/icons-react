import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klawgabfn.css';
import '../../css/e/e0z7xwbjn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klawgabfn"/><path class="e0z7xwbjn"/>`,
		"fallback": "flat-color-icons:signature",
	});
}

export default Component;
