import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag4y0ib0x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag4y0ib0x"/>`,
		"fallback": "dinkie-icons:radioactive",
	});
}

export default Component;
