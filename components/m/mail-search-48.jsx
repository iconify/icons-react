import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xew9pqb-j.css';
import '../../css/l/ld-_jqbkr.css';
import '../../css/a/auaqc0ftv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xew9pqb-j"/><path class="ld-_jqbkr"/><path class="auaqc0ftv"/>`,
		"fallback": "energy-icons:mail-search-48",
	});
}

export default Component;
