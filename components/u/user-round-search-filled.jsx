import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks_ymhfxr.css';
import '../../css/b/b_q949lvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ks_ymhfxr"/><path class="b_q949lvw"/>`,
		"fallback": "lucide-extended:user-round-search-filled",
	});
}

export default Component;
