import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqb812bom.css';
import '../../css/p/ph6nbhfkp.css';
import '../../css/h/hgj6s0-wz.css';
import '../../css/b/bodq3cb3i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqb812bom"/><path class="ph6nbhfkp"/><path class="hgj6s0-wz"/><path class="bodq3cb3i"/>`,
		"fallback": "selfhst:tangerine-ui",
	});
}

export default Component;
