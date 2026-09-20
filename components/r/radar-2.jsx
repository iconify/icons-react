import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/w/wy-6to7yi.css';
import '../../css/p/p2i89_23r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="wy-6to7yi"/><path class="p2i89_23r"/></g>`,
		"fallback": "tabler:radar-2",
	});
}

export default Component;
