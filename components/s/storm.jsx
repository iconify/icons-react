import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pdtnlsbaa.css';
import '../../css/t/tt326gbdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="pdtnlsbaa"/><path class="tt326gbdl"/></g>`,
		"fallback": "cryptocurrency-color:storm",
	});
}

export default Component;
