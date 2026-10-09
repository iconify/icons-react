import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/l/ljoe5xb8q.css';
import '../../css/z/z6aqjgcei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="ljoe5xb8q"/><path class="z6aqjgcei"/>`,
		"fallback": "energy-icons:radar-20-bold",
	});
}

export default Component;
