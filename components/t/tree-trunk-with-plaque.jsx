import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvuhsqg_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvuhsqg_d"/>`,
		"fallback": "pinhead:tree-trunk-with-plaque",
	});
}

export default Component;
