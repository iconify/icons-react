import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9cgd7b2i.css';
import '../../css/o/oz8o1vb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9cgd7b2i"/><path class="oz8o1vb8w"/></g>`,
		"fallback": "reicon:money-add-filled",
	});
}

export default Component;
