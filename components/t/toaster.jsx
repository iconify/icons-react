import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n93up_bbp.css';
import '../../css/z/zudcgcbes.css';
import '../../css/h/ham0q6h3y.css';
import '../../css/m/mqksp_lzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n93up_bbp"/><path class="zudcgcbes"/><circle class="ham0q6h3y"/><path class="mqksp_lzr"/></g>`,
		"fallback": "lucide-lab:toaster",
	});
}

export default Component;
