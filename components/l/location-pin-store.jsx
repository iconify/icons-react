import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cf5tx4chs.css';
import '../../css/m/m2s5uoxdk.css';
import '../../css/q/qlccd6biw.css';
import '../../css/m/m5x6lx8cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cf5tx4chs"/><path class="m2s5uoxdk"/><path class="qlccd6biw"/><path class="m5x6lx8cn"/></g>`,
		"fallback": "streamline-sharp-color:location-pin-store",
	});
}

export default Component;
