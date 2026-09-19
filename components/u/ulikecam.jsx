import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6jl_bkj.css';
import '../../css/g/gb7t1obix.css';
import '../../css/c/ca-lc-jmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ly6jl_bkj"><path class="gb7t1obix"/><path class="ca-lc-jmx"/></g>`,
		"fallback": "icon-park:ulikecam",
	});
}

export default Component;
