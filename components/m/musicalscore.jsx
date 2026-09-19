import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2ubv2bis.css';
import '../../css/c/cbna_rb5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2ubv2bis"/><path class="cbna_rb5p"/>`,
		"fallback": "fxemoji:musicalscore",
	});
}

export default Component;
