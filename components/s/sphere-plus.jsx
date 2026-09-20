import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b9v423h4j.css';
import '../../css/p/pgb3-jb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b9v423h4j"/><path class="pgb3-jb6e"/></g>`,
		"fallback": "tabler:sphere-plus",
	});
}

export default Component;
