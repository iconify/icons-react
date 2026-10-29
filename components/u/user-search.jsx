import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyouqzbzo.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/n/nc_o3uazh.css';
import '../../css/e/ea4gvab0h.css';
import '../../css/c/c345295xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyouqzbzo wm-k"/><path class="mcj8uxbod wm-k"/><path class="nc_o3uazh wm-s"/><path class="ea4gvab0h wm-s"/><path class="c345295xc wm-s"/>`,
		"fallback": "withicons-bauhaus:user-search",
	});
}

export default Component;
