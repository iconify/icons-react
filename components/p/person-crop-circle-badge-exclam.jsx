import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3c725ova.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3c725ova"/>`,
		"fallback": "f7:person-crop-circle-badge-exclam",
	});
}

export default Component;
