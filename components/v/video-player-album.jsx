import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t1vrx8bwg.css';
import '../../css/m/m5adgnb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t1vrx8bwg"/><path class="m5adgnb9w"/></g>`,
		"fallback": "streamline-ultimate:video-player-album",
	});
}

export default Component;
