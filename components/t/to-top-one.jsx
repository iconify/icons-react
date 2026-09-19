import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otm15eu5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otm15eu5r"/>`,
		"fallback": "icon-park-outline:to-top-one",
	});
}

export default Component;
