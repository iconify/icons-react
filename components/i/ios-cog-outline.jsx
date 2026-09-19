import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptj_bibnz.css';
import '../../css/z/z37-xpb0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptj_bibnz"/><path class="z37-xpb0a"/>`,
		"fallback": "ion:ios-cog-outline",
	});
}

export default Component;
