import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njo0cebfl.css';
import '../../css/k/kjwe9db2a.css';
import '../../css/g/g7d-yysdb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="njo0cebfl"/><path class="kjwe9db2a"/><rect transform="rotate(90 15 29)" class="g7d-yysdb"/></g>`,
		"fallback": "icon-park-outline:painted-screen",
	});
}

export default Component;
