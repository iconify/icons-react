import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnv4p6ezk.css';
import '../../css/o/orzcsyqzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnv4p6ezk"/><path class="orzcsyqzp"/>`,
		"fallback": "energy-icons:scanner-48-bold",
	});
}

export default Component;
