import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d68s-9ujn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d68s-9ujn"/>`,
		"fallback": "memory:table-top-door-one-way-left",
	});
}

export default Component;
