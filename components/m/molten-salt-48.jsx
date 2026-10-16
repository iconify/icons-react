import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-wxdblp.css';
import '../../css/x/xl5sv-boc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-wxdblp"/><path class="xl5sv-boc"/>`,
		"fallback": "energy-icons:molten-salt-48",
	});
}

export default Component;
