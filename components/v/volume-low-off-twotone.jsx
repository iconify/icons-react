import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/w/wy16wd.css';
import '../../css/o/oxx-om.css';
import '../../css/z/z2ygzk.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG43POEdEl"><path class="t5pxry wy16wd"/><path class="oxx-om t5pxry z2ygzk"/></mask></defs><path mask="url(#SVG43POEdEl)" class="botfzx"/><path class="gd_4-q t5pxry z2ygzk"/>`,
		"fallback": "line-md:volume-low-off-twotone",
	});
}

export default Component;
