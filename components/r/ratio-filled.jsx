import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz_m0fb4u.css';
import '../../css/y/yuu2iyljg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz_m0fb4u"/><path clip-rule="evenodd" class="yuu2iyljg"/>`,
		"fallback": "lucide-extended:ratio-filled",
	});
}

export default Component;
