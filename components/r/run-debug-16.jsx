import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_hap2nuf.css';
import '../../css/e/ee_cdkb8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_hap2nuf"/><path clip-rule="evenodd" class="ee_cdkb8m"/>`,
		"fallback": "qlementine-icons:run-debug-16",
	});
}

export default Component;
