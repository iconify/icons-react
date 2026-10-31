import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cvob-4bwx.css';
import '../../css/g/gf4gil12a.css';
import '../../css/v/v-0n55bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="cvob-4bwx"/><path class="gf4gil12a"/><path class="v-0n55bdp"/></g>`,
		"fallback": "struq:screen-share",
	});
}

export default Component;
