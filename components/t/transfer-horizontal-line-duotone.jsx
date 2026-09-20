import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hdcn_s_df.css';
import '../../css/t/tm1rg8bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hdcn_s_df"/><path class="tm1rg8bbr"/></g>`,
		"fallback": "solar:transfer-horizontal-line-duotone",
	});
}

export default Component;
