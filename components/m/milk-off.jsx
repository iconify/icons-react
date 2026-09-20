import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yndbwdb_n.css';
import '../../css/k/k9ecbh3kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yndbwdb_n"/><path class="k9ecbh3kj"/></g>`,
		"fallback": "tabler:milk-off",
	});
}

export default Component;
