import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md-zhkn3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md-zhkn3q"/>`,
		"fallback": "thesvg-color:scanfile",
	});
}

export default Component;
