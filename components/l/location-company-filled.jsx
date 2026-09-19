import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abz4jnh1h.css';
import '../../css/f/f_bgirb9d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abz4jnh1h"/><path class="f_bgirb9d"/>`,
		"fallback": "carbon:location-company-filled",
	});
}

export default Component;
