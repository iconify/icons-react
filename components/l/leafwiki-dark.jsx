import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5ledtbof.css';
import '../../css/v/vtrz5wtxj.css';
import '../../css/m/mx9-r4b3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5ledtbof"/><path class="vtrz5wtxj"/><path class="mx9-r4b3b"/>`,
		"fallback": "selfhst:leafwiki-dark",
	});
}

export default Component;
