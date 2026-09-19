import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pejt8hb4w.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pejt8hb4w"/>`,
		"fallback": "fa-solid:neuter",
	});
}

export default Component;
