import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/ljkcn7bhm.css';
import '../../css/j/jrv23tb6v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ljkcn7bhm"/><path class="jrv23tb6v"/></g>`,
		"fallback": "streamline:rose",
	});
}

export default Component;
