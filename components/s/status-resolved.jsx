import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4v017l6t.css';
import '../../css/v/v1j9wac_l.css';
import '../../css/s/sy9gb5bzi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4v017l6t"/><path class="v1j9wac_l"/><path class="sy9gb5bzi"/>`,
		"fallback": "carbon:status-resolved",
	});
}

export default Component;
