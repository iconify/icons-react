import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xszhhacxv.css';
import '../../css/t/ta5zsvjtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xszhhacxv"/><path class="ta5zsvjtd"/></g>`,
		"fallback": "tabler:lighter",
	});
}

export default Component;
