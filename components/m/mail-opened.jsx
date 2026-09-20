import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cte-q8baf.css';
import '../../css/r/ronbcpe1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cte-q8baf"/><path class="ronbcpe1k"/></g>`,
		"fallback": "tabler:mail-opened",
	});
}

export default Component;
