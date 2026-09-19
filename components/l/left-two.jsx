import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agewztbyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agewztbyn"/>`,
		"fallback": "icon-park-solid:left-two",
	});
}

export default Component;
