import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9bcrfbad.css';
import '../../css/s/s0c44qbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y9bcrfbad"/><path class="s0c44qbwq"/></g>`,
		"fallback": "tabler:irregular-polyhedron-off",
	});
}

export default Component;
