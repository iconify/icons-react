import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4shs0_ov.css';
import '../../css/t/t8d9w-tva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4shs0_ov"/><path class="t8d9w-tva"/>`,
		"fallback": "energy-icons:sort-20",
	});
}

export default Component;
