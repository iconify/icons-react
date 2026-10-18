import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9n5x7btr.css';
import '../../css/e/e9it5tbme.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9n5x7btr"/><path class="e9it5tbme"/>`,
		"fallback": "energy-icons:ufh-manifold-20",
	});
}

export default Component;
