import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jiyp4ybyo.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/s/szzmfoboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jiyp4ybyo"/><path class="a91ndtnyb"/><path class="v-dzpkwlt wm-a"/><path class="szzmfoboo wm-s"/></g>`,
		"fallback": "withicons:package-plus",
	});
}

export default Component;
