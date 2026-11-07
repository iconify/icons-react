import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2m6oob6i.css';
import '../../css/k/kbnhcials.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2m6oob6i"/><path class="kbnhcials"/>`,
		"fallback": "solar:planet-bold-duotone",
	});
}

export default Component;
