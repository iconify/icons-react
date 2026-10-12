import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpzeqkffn.css';
import '../../css/m/mzf3t7bji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gpzeqkffn"/><path class="mzf3t7bji"/>`,
		"fallback": "lucide-extended:user-search-filled",
	});
}

export default Component;
