import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z1azhwbhy.css';
import '../../css/v/vh0j1jbmm.css';
import '../../css/e/en0ezkbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z1azhwbhy"/><path class="vh0j1jbmm"/><path class="en0ezkbdu"/></g>`,
		"fallback": "streamline-ultimate:knives-set",
	});
}

export default Component;
