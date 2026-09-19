import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h9ei6dbpa.css';
import '../../css/j/j2kqu2bci.css';
import '../../css/f/f-g4jnfew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h9ei6dbpa"/><rect transform="rotate(-45 5.071 33.071)" class="j2kqu2bci"/><path class="f-g4jnfew"/></g>`,
		"fallback": "icon-park-outline:sandwich-one",
	});
}

export default Component;
