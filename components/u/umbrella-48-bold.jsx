import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arvckpbkx.css';
import '../../css/j/jlgpfub1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arvckpbkx"/><path class="jlgpfub1m"/>`,
		"fallback": "energy-icons:umbrella-48-bold",
	});
}

export default Component;
