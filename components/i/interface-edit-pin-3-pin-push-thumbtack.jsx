import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2i6hgb-g.css';
import '../../css/x/xqtwvi1dn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="y2i6hgb-g"/><path class="xqtwvi1dn"/></g>`,
		"fallback": "streamline:interface-edit-pin-3-pin-push-thumbtack",
	});
}

export default Component;
