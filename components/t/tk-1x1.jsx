import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu_afbskh.css';
import '../../css/e/eei-3cbtk.css';
import '../../css/g/gikolbcax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu_afbskh"/><path class="eei-3cbtk"/><path class="gikolbcax"/>`,
		"fallback": "flag:tk-1x1",
	});
}

export default Component;
