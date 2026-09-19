import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_elxzbvf.css';
import '../../css/m/mnvhu3zei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="t_elxzbvf"/><path class="mnvhu3zei"/></g>`,
		"fallback": "cryptocurrency-color:wabi",
	});
}

export default Component;
