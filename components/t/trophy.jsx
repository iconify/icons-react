import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/go-79r-pz.css';
import '../../css/p/p982fkb3t.css';
import '../../css/m/m2_7h1zcn.css';
import '../../css/s/sm9mazbxy.css';
import '../../css/q/qluli75qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="go-79r-pz wm-shadow"/><path class="p982fkb3t"/><path class="m2_7h1zcn"/><path class="sm9mazbxy"/><path class="qluli75qf"/></g>`,
		"fallback": "withicons-retro:trophy",
	});
}

export default Component;
