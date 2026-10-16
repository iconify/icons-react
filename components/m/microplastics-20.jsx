import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf-q9zggw.css';
import '../../css/y/y4-jdzhel.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf-q9zggw"/><path class="y4-jdzhel"/>`,
		"fallback": "energy-icons:microplastics-20",
	});
}

export default Component;
