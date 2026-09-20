import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/acontm-2q.css';
import '../../css/y/y9jt1wb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="acontm-2q"/><path class="y9jt1wb1l"/></g>`,
		"fallback": "lucide:trending-down",
	});
}

export default Component;
