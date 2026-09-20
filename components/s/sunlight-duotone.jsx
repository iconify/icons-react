import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/r/rju1aj1hm.css';
import '../../css/p/pmu9n03jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="rju1aj1hm"/><path class="pmu9n03jb"/></g>`,
		"fallback": "lets-icons:sunlight-duotone",
	});
}

export default Component;
