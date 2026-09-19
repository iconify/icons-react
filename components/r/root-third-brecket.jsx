import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b3om0ubnr.css';
import '../../css/z/ztw77h30a.css';
import '../../css/k/k9g2oxbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b3om0ubnr"/><path class="ztw77h30a"/><path class="k9g2oxbve"/></g>`,
		"fallback": "hugeicons:root-third-brecket",
	});
}

export default Component;
