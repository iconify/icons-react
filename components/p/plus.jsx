import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7giafb7e.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/z0pt6bbyk.css';
import '../../css/j/jcsbf6brg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e7giafb7e"/><g class="n1mjunbsu"><path class="z0pt6bbyk"/><path class="jcsbf6brg"/></g>`,
		"fallback": "flat-color-icons:plus",
	});
}

export default Component;
