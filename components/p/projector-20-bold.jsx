import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al-13db5j.css';
import '../../css/x/xv1e-qb3o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al-13db5j"/><path class="xv1e-qb3o"/>`,
		"fallback": "energy-icons:projector-20-bold",
	});
}

export default Component;
