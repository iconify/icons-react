import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lgs28zbua.css';
import '../../css/t/ttb5ggb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lgs28zbua"/><path class="ttb5ggb2q"/></g>`,
		"fallback": "streamline-ultimate:player-phone-station-1",
	});
}

export default Component;
