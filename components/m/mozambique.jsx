import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az4h9ufdp.css';
import '../../css/k/kt9oi51km.css';
import '../../css/d/dm2_togac.css';
import '../../css/z/z472j7n0q.css';
import '../../css/a/ac6rwvb5p.css';
import '../../css/n/nu9ii6b6j.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az4h9ufdp"/><path class="kt9oi51km"/><path class="dm2_togac"/><path class="z472j7n0q"/><path class="ac6rwvb5p"/><path class="nu9ii6b6j"/>`,
		"fallback": "tabler-flags:mozambique",
	});
}

export default Component;
