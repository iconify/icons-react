import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh99os3ic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh99os3ic"/>`,
		"fallback": "carbon:open-panel-right",
	});
}

export default Component;
