import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j174--bix.css';
import '../../css/y/y9e_r21yc.css';
import '../../css/f/fd0w32b9p.css';
import '../../css/o/oqrsy3bng.css';
import '../../css/b/bqy7-kv9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j174--bix"/><path class="y9e_r21yc"/><path class="fd0w32b9p"/><path class="oqrsy3bng"/><path class="bqy7-kv9k"/>`,
		"fallback": "energy-icons:plug-x-48-bold",
	});
}

export default Component;
