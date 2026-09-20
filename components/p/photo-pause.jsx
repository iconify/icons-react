import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w2jhm70ys.css';
import '../../css/z/zs7ebbcgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w2jhm70ys"/><path class="zs7ebbcgz"/></g>`,
		"fallback": "tabler:photo-pause",
	});
}

export default Component;
