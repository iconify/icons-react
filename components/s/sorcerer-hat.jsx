import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htnff4qbs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htnff4qbs"/>`,
		"fallback": "icon-park-solid:sorcerer-hat",
	});
}

export default Component;
