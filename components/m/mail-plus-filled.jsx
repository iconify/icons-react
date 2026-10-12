import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yismpnbbv.css';
import '../../css/t/t3kg4fp0h.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yismpnbbv"/><path class="t3kg4fp0h"/><path class="zc_h-6bbl"/>`,
		"fallback": "lucide-extended:mail-plus-filled",
	});
}

export default Component;
