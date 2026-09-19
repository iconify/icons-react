import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_eesoi_k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_eesoi_k"/>`,
		"fallback": "icomoon-free:spinner3",
	});
}

export default Component;
