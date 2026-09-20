import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l29hkub0n.css';
import '../../css/a/a72dq_0xi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="l29hkub0n"/><path class="a72dq_0xi"/></g>`,
		"fallback": "marketeq:switch-left",
	});
}

export default Component;
