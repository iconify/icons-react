import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/squcus_df.css';
import '../../css/p/pjdn5g3ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="squcus_df"/><path class="pjdn5g3ov"/></g>`,
		"fallback": "hugeicons:save",
	});
}

export default Component;
