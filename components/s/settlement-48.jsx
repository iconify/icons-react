import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ague2ubah.css';
import '../../css/h/hv0bd7b7k.css';
import '../../css/g/g3zhl709q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ague2ubah"/><path class="hv0bd7b7k"/><path class="g3zhl709q"/>`,
		"fallback": "energy-icons:settlement-48",
	});
}

export default Component;
