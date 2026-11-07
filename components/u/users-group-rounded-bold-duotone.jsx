import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/dayjs-bgu.css';
import '../../css/d/dr1p0554f.css';
import '../../css/a/a0yh6z_ij.css';
import '../../css/b/boyowm1xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="dayjs-bgu"/><path class="dr1p0554f"/></g><path class="a0yh6z_ij"/><path class="boyowm1xr"/>`,
		"fallback": "solar:users-group-rounded-bold-duotone",
	});
}

export default Component;
