import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf53lvbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf53lvbya"/>`,
		"fallback": "qlementine-icons:sliders-horizontal-24",
	});
}

export default Component;
