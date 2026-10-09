import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn86vr-5u.css';
import '../../css/h/hjs-1h8-e.css';
import '../../css/v/v4b84_btw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn86vr-5u"/><path class="hjs-1h8-e"/><path class="v4b84_btw"/>`,
		"fallback": "energy-icons:offset-48-bold",
	});
}

export default Component;
