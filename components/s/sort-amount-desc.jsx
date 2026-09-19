import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc0qugbit.css';
import '../../css/n/nvekhcocz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc0qugbit"/><path class="nvekhcocz"/>`,
		"fallback": "icomoon-free:sort-amount-desc",
	});
}

export default Component;
