import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzqmkgkzn.css';
import '../../css/b/bz4e11bbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzqmkgkzn"/><path class="bz4e11bbe"/>`,
		"fallback": "energy-icons:seed-48-bold",
	});
}

export default Component;
