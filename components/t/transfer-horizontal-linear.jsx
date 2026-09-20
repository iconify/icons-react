import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hdcn_s_df.css';
import '../../css/d/dxrk6jb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hdcn_s_df"/><path class="dxrk6jb6g"/></g>`,
		"fallback": "solar:transfer-horizontal-linear",
	});
}

export default Component;
