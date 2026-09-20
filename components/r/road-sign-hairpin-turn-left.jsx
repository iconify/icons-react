import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dabc3ybij.css';
import '../../css/g/geoysppjk.css';
import '../../css/u/uzzwf3bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dabc3ybij"/><path class="geoysppjk"/><path class="uzzwf3bzu"/></g>`,
		"fallback": "streamline-ultimate:road-sign-hairpin-turn-left",
	});
}

export default Component;
