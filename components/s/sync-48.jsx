import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0duj3ble.css';
import '../../css/x/x3wc924xj.css';
import '../../css/i/i1s8y7e8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0duj3ble"/><path class="x3wc924xj"/><path class="i1s8y7e8w"/>`,
		"fallback": "energy-icons:sync-48",
	});
}

export default Component;
