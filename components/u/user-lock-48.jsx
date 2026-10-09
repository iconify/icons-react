import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmbcisb5f.css';
import '../../css/k/ktb8eibqk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmbcisb5f"/><path class="ktb8eibqk"/>`,
		"fallback": "energy-icons:user-lock-48",
	});
}

export default Component;
