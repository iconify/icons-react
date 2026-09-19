import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxj0albai.css';
import '../../css/c/cx5wjlbpv.css';
import '../../css/c/cylan_37t.css';
import '../../css/j/juzjijckv.css';
import '../../css/z/zd-u8obhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxj0albai"/><path class="cx5wjlbpv"/><path class="cylan_37t"/><circle class="juzjijckv"/><path class="zd-u8obhn"/>`,
		"fallback": "fxemoji:tapecartridge",
	});
}

export default Component;
