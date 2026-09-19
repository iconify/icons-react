import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyr___g3f.css';
import '../../css/d/dfv392bxj.css';
import '../../css/g/g03t4bb1m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyr___g3f"/><circle class="dfv392bxj"/><path class="g03t4bb1m"/>`,
		"fallback": "carbon:server-proxy",
	});
}

export default Component;
