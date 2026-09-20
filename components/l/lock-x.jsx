import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bqpxm5d4f.css';
import '../../css/d/dwu4nv5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bqpxm5d4f"/><path class="dwu4nv5ou"/></g>`,
		"fallback": "tabler:lock-x",
	});
}

export default Component;
