import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tp73kntxa.css';
import '../../css/a/a7_t46bcr.css';
import '../../css/a/ajx95yo6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tp73kntxa"/><path class="a7_t46bcr"/><path class="ajx95yo6o"/></g>`,
		"fallback": "tabler:switch-3",
	});
}

export default Component;
