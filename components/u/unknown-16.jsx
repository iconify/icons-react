import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv-d8hb5y.css';
import '../../css/o/o-uubwh4c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv-d8hb5y"/><path clip-rule="evenodd" class="o-uubwh4c"/>`,
		"fallback": "qlementine-icons:unknown-16",
	});
}

export default Component;
