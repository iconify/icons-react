import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkarr2bij.css';
import '../../css/c/ctcoo0l_z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkarr2bij"/><path class="ctcoo0l_z"/>`,
		"fallback": "energy-icons:parking-48-bold",
	});
}

export default Component;
