import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/j/jp4_2-bik.css';
import '../../css/c/cj7tbsppw.css';
import '../../css/n/nku3rxxks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="jp4_2-bik"/><path class="cj7tbsppw"/><path class="nku3rxxks"/></g>`,
		"fallback": "streamline-cyber-color:synchronize-find-search",
	});
}

export default Component;
