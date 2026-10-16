import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj4vzjb5q.css';
import '../../css/v/vnif4gbyf.css';
import '../../css/y/ye5cuebhj.css';
import '../../css/i/iclthgb7p.css';
import '../../css/n/nrwsk66dz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj4vzjb5q"/><path class="vnif4gbyf"/><path class="ye5cuebhj"/><path class="iclthgb7p"/><path class="nrwsk66dz"/>`,
		"fallback": "energy-icons:repowering-20",
	});
}

export default Component;
