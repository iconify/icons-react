import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mjshq-p0i.css';
import '../../css/v/voxv-6yle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mjshq-p0i"/><path class="voxv-6yle"/></g>`,
		"fallback": "streamline-ultimate:railroad-metro",
	});
}

export default Component;
