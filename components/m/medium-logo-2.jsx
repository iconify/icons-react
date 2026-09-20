import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zz6g_pbbi.css';
import '../../css/b/bvqtdmbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zz6g_pbbi"/><path class="bvqtdmbte"/></g>`,
		"fallback": "streamline-logos:medium-logo-2",
	});
}

export default Component;
