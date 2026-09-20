import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me00cjb6q.css';
import '../../css/d/dezr6ts0k.css';
import '../../css/w/wdholibql.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me00cjb6q"/><path class="dezr6ts0k"/><path class="wdholibql"/>`,
		"fallback": "material-icon-theme:vue-config",
	});
}

export default Component;
