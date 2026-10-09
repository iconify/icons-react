import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j174--bix.css';
import '../../css/y/y9e_r21yc.css';
import '../../css/f/fd0w32b9p.css';
import '../../css/j/jyfi0eawb.css';
import '../../css/w/wii29dbas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j174--bix"/><path class="y9e_r21yc"/><path class="fd0w32b9p"/><path class="jyfi0eawb"/><path class="wii29dbas"/>`,
		"fallback": "energy-icons:plug-plus-48-bold",
	});
}

export default Component;
