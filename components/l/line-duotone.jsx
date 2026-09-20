import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/d/d56jn-bzy.css';
import '../../css/o/or0j-mbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="d56jn-bzy"/><path class="or0j-mbfc"/></g>`,
		"fallback": "lets-icons:line-duotone",
	});
}

export default Component;
