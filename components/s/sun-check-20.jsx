import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8nww4mnw.css';
import '../../css/m/mg--uz6gi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8nww4mnw"/><path class="mg--uz6gi"/>`,
		"fallback": "energy-icons:sun-check-20",
	});
}

export default Component;
