import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/scy0lvbai.css';
import '../../css/c/cf-shj1li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="scy0lvbai"/><path class="cf-shj1li"/></g>`,
		"fallback": "tabler:irregular-polyhedron-plus",
	});
}

export default Component;
