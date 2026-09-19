import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sd5pw-b8u.css';
import '../../css/m/mitl-8btu.css';
import '../../css/p/pod1yswni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sd5pw-b8u"/><path class="mitl-8btu"/><path class="pod1yswni"/></g>`,
		"fallback": "iconoir:learning",
	});
}

export default Component;
