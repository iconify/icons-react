import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvx5x4s9r.css';
import '../../css/r/rk5uadcey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zvx5x4s9r"/><path class="rk5uadcey"/></g>`,
		"fallback": "tabler:shopping-bag-dollar",
	});
}

export default Component;
