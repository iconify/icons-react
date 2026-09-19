import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imeszr5qc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imeszr5qc"/>`,
		"fallback": "icon-park-solid:right-one",
	});
}

export default Component;
