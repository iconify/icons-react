import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmv2f3b2c.css';
import '../../css/r/rp05lmnnc.css';
import '../../css/v/v_mzr6b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jmv2f3b2c"/><path class="rp05lmnnc"/><path class="v_mzr6b6g"/></g>`,
		"fallback": "reicon:music3",
	});
}

export default Component;
