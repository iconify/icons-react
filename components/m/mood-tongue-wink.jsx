import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a3haduf6f.css';
import '../../css/k/k240stbvg.css';
import '../../css/i/ice5n0bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a3haduf6f"/><path class="k240stbvg"/><path class="ice5n0bjx"/></g>`,
		"fallback": "tabler:mood-tongue-wink",
	});
}

export default Component;
