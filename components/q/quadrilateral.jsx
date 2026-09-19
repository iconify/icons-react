import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nllsco9uf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nllsco9uf"/>`,
		"fallback": "icon-park-outline:quadrilateral",
	});
}

export default Component;
