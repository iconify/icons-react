import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r086wol0f.css';
import '../../css/g/gnhrn1btq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r086wol0f"/><path class="gnhrn1btq"/></g>`,
		"fallback": "heroicons:newspaper-20-solid",
	});
}

export default Component;
