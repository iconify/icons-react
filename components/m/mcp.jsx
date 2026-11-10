import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hql1d6bci.css';
import '../../css/g/gdp26538c.css';
import '../../css/z/z_g8f64lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hql1d6bci"/><path class="gdp26538c"/><path class="z_g8f64lk"/></g>`,
		"fallback": "tabler:mcp",
	});
}

export default Component;
