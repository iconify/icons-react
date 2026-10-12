import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edfoyo7yi.css';
import '../../css/c/c1uddcbcz.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="edfoyo7yi"/><path class="c1uddcbcz"/><path class="zc_h-6bbl"/>`,
		"fallback": "lucide-extended:mail-search-filled",
	});
}

export default Component;
