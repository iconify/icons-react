import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdxc4tbhw.css';
import '../../css/a/a12oiib0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mdxc4tbhw"/><path class="a12oiib0t"/></g>`,
		"fallback": "tabler:outbound",
	});
}

export default Component;
