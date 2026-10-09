import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooff228am.css';
import '../../css/d/d0qdug7jo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooff228am"/><path class="d0qdug7jo"/>`,
		"fallback": "energy-icons:redo-48",
	});
}

export default Component;
