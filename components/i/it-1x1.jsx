import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/erzf03bmv.css';
import '../../css/s/swy8nqbmd.css';
import '../../css/r/rb9a4ebtj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="erzf03bmv"/><path class="swy8nqbmd"/><path class="rb9a4ebtj"/></g>`,
		"fallback": "flag:it-1x1",
	});
}

export default Component;
