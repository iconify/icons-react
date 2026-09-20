import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hrjfpsb2u.css';
import '../../css/o/of6j-t7or.css';
import '../../css/y/yph-txb3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="hrjfpsb2u"/><path class="of6j-t7or"/><rect class="yph-txb3i"/></g>`,
		"fallback": "streamline:interface-search-square-glass-search-square-magnifying",
	});
}

export default Component;
