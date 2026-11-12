import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we467pf1g.css';
import '../../css/x/xfxpombnv.css';
import '../../css/e/eikzejq2l.css';
import '../../css/k/kkjdcnr7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we467pf1g"/><path class="xfxpombnv"/><path class="eikzejq2l"/><path class="kkjdcnr7t"/>`,
		"fallback": "selfhst:linux-containers-lxc-dark",
	});
}

export default Component;
