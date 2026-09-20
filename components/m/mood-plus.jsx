import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ynssjob8h.css';
import '../../css/e/eosffmb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ynssjob8h"/><path class="eosffmb0q"/></g>`,
		"fallback": "tabler:mood-plus",
	});
}

export default Component;
