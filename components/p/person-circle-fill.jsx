import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3xtccvpx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3xtccvpx"/>`,
		"fallback": "f7:person-circle-fill",
	});
}

export default Component;
