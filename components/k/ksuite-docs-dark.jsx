import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1d7f6_ek.css';
import '../../css/z/zzqclwbxv.css';
import '../../css/f/frxdtjj9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1d7f6_ek"/><path class="zzqclwbxv"/><path class="frxdtjj9s"/>`,
		"fallback": "selfhst:ksuite-docs-dark",
	});
}

export default Component;
