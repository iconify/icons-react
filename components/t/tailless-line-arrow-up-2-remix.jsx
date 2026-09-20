import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb800tpmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vb800tpmy"/>`,
		"fallback": "streamline-plump:tailless-line-arrow-up-2-remix",
	});
}

export default Component;
