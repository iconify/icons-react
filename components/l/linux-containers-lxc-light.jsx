import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wap4fu7vn.css';
import '../../css/m/mex95lw7c.css';
import '../../css/m/mcdgwguil.css';
import '../../css/h/hh45kun6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wap4fu7vn"/><path class="mex95lw7c"/><path class="mcdgwguil"/><path class="hh45kun6a"/>`,
		"fallback": "selfhst:linux-containers-lxc-light",
	});
}

export default Component;
