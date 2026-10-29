import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oy8euoj1g.css';
import '../../css/c/c_msbbeve.css';
import '../../css/j/jiyp4ybyo.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/v/v-dzpkwlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oy8euoj1g"/><path class="c_msbbeve wm-s"/><path class="jiyp4ybyo"/><path class="a91ndtnyb"/><path class="v-dzpkwlt wm-a"/></g>`,
		"fallback": "withicons:package-x-duo",
	});
}

export default Component;
