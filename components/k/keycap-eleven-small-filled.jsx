import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ry7yewp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-ry7yewp"/>`,
		"fallback": "dinkie-icons:keycap-eleven-small-filled",
	});
}

export default Component;
