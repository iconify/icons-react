import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy1isrbes.css';
import '../../css/z/zrmu6-ymm.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy1isrbes"/><path class="zrmu6-ymm"/><path class="zc_h-6bbl"/>`,
		"fallback": "lucide-extended:mail-pen-filled",
	});
}

export default Component;
