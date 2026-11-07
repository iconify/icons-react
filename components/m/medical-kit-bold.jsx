import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k89onwb0c.css';
import '../../css/z/zlth73b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k89onwb0c"/><path clip-rule="evenodd" class="zlth73b-a"/>`,
		"fallback": "solar:medical-kit-bold",
	});
}

export default Component;
