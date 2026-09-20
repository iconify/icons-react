import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/holyfq_5n.css';
import '../../css/t/tcxsrfb_r.css';
import '../../css/p/p3i2zepvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="holyfq_5n"/><path class="tcxsrfb_r"/><path class="p3i2zepvj"/></g>`,
		"fallback": "tabler:olympics-off",
	});
}

export default Component;
