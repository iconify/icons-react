import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjml_t-hp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjml_t-hp"/>`,
		"fallback": "energy-icons:moonrise-20-bold",
	});
}

export default Component;
