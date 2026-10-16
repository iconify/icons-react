import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfzcs1bmb.css';
import '../../css/x/xf-7edb6n.css';
import '../../css/a/aw8zs8bon.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfzcs1bmb"/><path class="xf-7edb6n"/><path class="aw8zs8bon"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:parliament-48",
	});
}

export default Component;
