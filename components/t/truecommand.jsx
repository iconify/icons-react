import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmpngjpsi.css';
import '../../css/q/qzvdi8qaf.css';
import '../../css/x/xi_w0vrbe.css';
import '../../css/n/n5wctwmmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmpngjpsi"/><path class="qzvdi8qaf"/><path class="xi_w0vrbe"/><path class="n5wctwmmu"/>`,
		"fallback": "selfhst:truecommand",
	});
}

export default Component;
