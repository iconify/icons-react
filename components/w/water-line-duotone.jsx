import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ym5aw5b8u.css';
import '../../css/s/smdkeehst.css';
import '../../css/r/rw7cyfbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ym5aw5b8u"/><path class="smdkeehst"/><path class="rw7cyfbex"/></g>`,
		"fallback": "solar:water-line-duotone",
	});
}

export default Component;
