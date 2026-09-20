import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t1afujhin.css';
import '../../css/t/t7jkg_bmt.css';
import '../../css/v/vny47hble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t1afujhin"/><path class="t7jkg_bmt"/><path class="vny47hble"/></g>`,
		"fallback": "solar:repeat-one-linear",
	});
}

export default Component;
