import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9weu6t_z.css';
import '../../css/l/li0btfuqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9weu6t_z"/><path class="li0btfuqu"/>`,
		"fallback": "energy-icons:terminal-48",
	});
}

export default Component;
