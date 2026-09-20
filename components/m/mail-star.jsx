import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aao18s30f.css';
import '../../css/g/ggv4rvbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aao18s30f"/><path class="ggv4rvbar"/></g>`,
		"fallback": "tabler:mail-star",
	});
}

export default Component;
