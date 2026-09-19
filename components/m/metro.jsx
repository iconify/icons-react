import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfuiu8b6u.css';
import '../../css/m/m51ssub5f.css';
import '../../css/x/xg046ujlu.css';
import '../../css/h/hze62kovg.css';
import '../../css/v/vineujmql.css';
import '../../css/f/frrafq9tp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dfuiu8b6u"/><path class="m51ssub5f"/><path class="xg046ujlu"/><path class="hze62kovg"/><path class="vineujmql"/><path class="frrafq9tp"/>`,
		"fallback": "fxemoji:metro",
	});
}

export default Component;
