import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9ngw6b4j.css';
import '../../css/w/wyy-b353h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y9ngw6b4j"/><rect class="wyy-b353h"/></g>`,
		"fallback": "lucide:tablet-smartphone",
	});
}

export default Component;
