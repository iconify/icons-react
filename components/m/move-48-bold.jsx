import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9mb5epez.css';
import '../../css/o/ofnlx5qvz.css';
import '../../css/n/nciip6bxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9mb5epez"/><path class="ofnlx5qvz"/><path class="nciip6bxo"/>`,
		"fallback": "energy-icons:move-48-bold",
	});
}

export default Component;
