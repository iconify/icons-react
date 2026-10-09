import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pql4robbq.css';
import '../../css/s/sqhb9ua0d.css';
import '../../css/k/kh7aeobnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pql4robbq"/><path class="sqhb9ua0d"/><path class="kh7aeobnj"/>`,
		"fallback": "energy-icons:pipe-elbow-48-bold",
	});
}

export default Component;
