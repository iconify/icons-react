import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyjcz-sea.css';
import '../../css/u/ua1tn-b_w.css';
import '../../css/m/m9tnvhbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eyjcz-sea"/><path class="ua1tn-b_w"/><path class="m9tnvhbhu"/></g>`,
		"fallback": "streamline-ultimate:tuk-tuk",
	});
}

export default Component;
