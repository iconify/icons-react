import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/c/cbdkjzbyk.css';
import '../../css/b/b-7asgbpr.css';
import '../../css/p/pmtqnwzqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="y6f0jibvm"/><path class="cbdkjzbyk"/><path class="b-7asgbpr"/><path class="pmtqnwzqn"/></g>`,
		"fallback": "icon-park:volkswagen",
	});
}

export default Component;
