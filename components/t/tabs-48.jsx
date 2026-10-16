import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar2h8rs6u.css';
import '../../css/f/fd1yhqbwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar2h8rs6u"/><path class="fd1yhqbwh"/>`,
		"fallback": "energy-icons:tabs-48",
	});
}

export default Component;
