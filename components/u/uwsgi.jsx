import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgn46h21v.css';
import '../../css/o/oai5is-6o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="cuyn6tgcc"/><g class="cuyn6tgcc"><path class="lgn46h21v"/><g transform="translate(-18.436 -431.962)"><circle/><path class="oai5is-6o"/></g></g>`,
		"fallback": "devicon-plain:uwsgi",
	});
}

export default Component;
