import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx9_9iq6d.css';
import '../../css/e/eumf_hb7z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx9_9iq6d"/><path class="eumf_hb7z"/>`,
		"fallback": "energy-icons:refresh-20-bold",
	});
}

export default Component;
