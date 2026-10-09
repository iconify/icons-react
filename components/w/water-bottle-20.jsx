import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkm6ueyhw.css';
import '../../css/r/rdt8hgb0t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkm6ueyhw"/><path class="rdt8hgb0t"/>`,
		"fallback": "energy-icons:water-bottle-20",
	});
}

export default Component;
