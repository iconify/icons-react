import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5tqq5pwc.css';
import '../../css/u/ukvmc8bfw.css';
import '../../css/g/g0k5_ba-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="p5tqq5pwc"/><circle class="ukvmc8bfw"/><path class="g0k5_ba-r"/></g>`,
		"fallback": "feather:speaker",
	});
}

export default Component;
