import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/a/av-jj2dnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t8a26skit"/><path class="av-jj2dnt"/></g>`,
		"fallback": "streamline-ultimate:video-player-movie",
	});
}

export default Component;
