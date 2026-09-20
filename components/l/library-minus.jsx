import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ya2sk7ccw.css';
import '../../css/m/m80qfpb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ya2sk7ccw"/><path class="m80qfpb0f"/></g>`,
		"fallback": "tabler:library-minus",
	});
}

export default Component;
