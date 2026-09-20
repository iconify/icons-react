import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0r9tgh1f.css';
import '../../css/h/hpgfchboe.css';
import '../../css/s/s564u2odx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k0r9tgh1f"/><path class="hpgfchboe"/><path class="s564u2odx"/></g>`,
		"fallback": "tabler:jacket",
	});
}

export default Component;
