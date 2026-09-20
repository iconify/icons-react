import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xwgqus_7g.css';
import '../../css/y/yn37abcju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xwgqus_7g"/><path class="yn37abcju"/></g>`,
		"fallback": "tabler:tools",
	});
}

export default Component;
