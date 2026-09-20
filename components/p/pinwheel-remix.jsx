import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgaj7hb_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qgaj7hb_g"/>`,
		"fallback": "streamline-plump:pinwheel-remix",
	});
}

export default Component;
