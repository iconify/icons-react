import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syhi_kb3g.css';
import '../../css/n/n47jdbbqa.css';
import '../../css/p/py966wb9m.css';
import '../../css/l/lyb69fbfd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syhi_kb3g"/><path class="n47jdbbqa"/><path class="py966wb9m"/><path class="lyb69fbfd"/>`,
		"fallback": "openmoji:paintbrush",
	});
}

export default Component;
