import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8tp9mb-t.css';
import '../../css/w/wrzecibmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8tp9mb-t"/><path class="wrzecibmp"/>`,
		"fallback": "energy-icons:ladder-48",
	});
}

export default Component;
