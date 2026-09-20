import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mb_worzxh.css';
import '../../css/a/aoactacpk.css';
import '../../css/v/vfye27i-m.css';
import '../../css/l/lqg6xsq0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mb_worzxh"/><path class="aoactacpk"/><path class="vfye27i-m"/><path class="lqg6xsq0m"/></g>`,
		"fallback": "streamline-sharp-color:spa",
	});
}

export default Component;
