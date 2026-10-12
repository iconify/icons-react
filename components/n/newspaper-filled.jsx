import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr46c6bmn.css';
import '../../css/v/v5th-uitq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr46c6bmn"/><path clip-rule="evenodd" class="v5th-uitq"/>`,
		"fallback": "lucide-extended:newspaper-filled",
	});
}

export default Component;
