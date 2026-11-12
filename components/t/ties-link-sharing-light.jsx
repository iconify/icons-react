import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5wa9vbik.css';
import '../../css/o/ov49f6buq.css';
import '../../css/v/vvs-xib6v.css';
import '../../css/d/do5vw-_td.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5wa9vbik"/><path class="ov49f6buq"/><path class="vvs-xib6v"/><path class="do5vw-_td"/>`,
		"fallback": "selfhst:ties-link-sharing-light",
	});
}

export default Component;
