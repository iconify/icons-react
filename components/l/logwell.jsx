import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rycq64tst.css';
import '../../css/c/c18ewnbwj.css';
import '../../css/y/yl94r0wtm.css';
import '../../css/p/priknnbhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rycq64tst"/><path class="c18ewnbwj"/><path class="yl94r0wtm"/><path class="priknnbhf"/>`,
		"fallback": "selfhst:logwell",
	});
}

export default Component;
