import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt5xtacse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt5xtacse"/>`,
		"fallback": "qlementine-icons:sort-desc-24",
	});
}

export default Component;
