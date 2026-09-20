import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vvpu9bq9c.css';
import '../../css/t/tv-pjdbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vvpu9bq9c"/><path class="tv-pjdbgh"/></g>`,
		"fallback": "streamline-ultimate:road-sign-turn-left",
	});
}

export default Component;
