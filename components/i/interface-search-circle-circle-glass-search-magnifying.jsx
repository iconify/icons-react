import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/h/hrjfpsb2u.css';
import '../../css/o/of6j-t7or.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xcv6q1bnv"/><circle class="hrjfpsb2u"/><path class="of6j-t7or"/></g>`,
		"fallback": "streamline:interface-search-circle-circle-glass-search-magnifying",
	});
}

export default Component;
