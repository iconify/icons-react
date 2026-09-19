import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqrin0qjl.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/zkbefnb4a.css';
import '../../css/d/dtalnipdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="bqrin0qjl"/><g class="n1mjunbsu"><path class="zkbefnb4a"/><path class="dtalnipdd"/></g></g>`,
		"fallback": "cryptocurrency-color:mod",
	});
}

export default Component;
