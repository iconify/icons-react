import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m1-m3z7-f.css';
import '../../css/t/t22qv0bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m1-m3z7-f"/><path class="t22qv0bgm"/></g>`,
		"fallback": "tabler:karate",
	});
}

export default Component;
