import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu5p79zwm.css';
import '../../css/l/l34qd19yz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu5p79zwm"/><path class="l34qd19yz"/>`,
		"fallback": "icon-park-solid:radiation",
	});
}

export default Component;
