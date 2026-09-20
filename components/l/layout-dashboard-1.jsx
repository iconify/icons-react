import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y54hmmsxp.css';
import '../../css/t/t8a26skit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y54hmmsxp"/><path class="t8a26skit"/></g>`,
		"fallback": "streamline-ultimate:layout-dashboard-1",
	});
}

export default Component;
