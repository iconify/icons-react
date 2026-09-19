import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uznrkyg-i.css';
import '../../css/w/wwhz16b1f.css';
import '../../css/n/n3l509bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uznrkyg-i"/><path class="wwhz16b1f"/><path class="n3l509bcp"/></g>`,
		"fallback": "hugeicons:microscope",
	});
}

export default Component;
