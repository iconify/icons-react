import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv3v9_bgq.css';
import '../../css/w/wegdy5b4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv3v9_bgq"/><path class="wegdy5b4f"/>`,
		"fallback": "energy-icons:lng-ship-48",
	});
}

export default Component;
