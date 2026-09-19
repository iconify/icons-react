import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ettqbyz1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ettqbyz1w"/>`,
		"fallback": "icon-park-solid:up-one",
	});
}

export default Component;
