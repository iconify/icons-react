import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7npn_d3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d7npn_d3m"/>`,
		"fallback": "streamline-plump:treasure-chest-remix",
	});
}

export default Component;
