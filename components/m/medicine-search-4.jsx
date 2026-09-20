import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqmze_b9t.css';
import '../../css/t/t5ldklm_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqmze_b9t"/><path class="t5ldklm_t"/></g>`,
		"fallback": "streamline-ultimate:medicine-search-4",
	});
}

export default Component;
