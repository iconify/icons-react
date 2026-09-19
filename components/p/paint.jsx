import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cozlh9whk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cozlh9whk"/>`,
		"fallback": "icon-park-outline:paint",
	});
}

export default Component;
