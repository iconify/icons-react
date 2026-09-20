import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2kuy8bdw.css';
import '../../css/i/ilo73sv2v.css';
import '../../css/z/zc__ylwvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i2kuy8bdw"/><rect class="ilo73sv2v"/><path class="zc__ylwvv"/></g>`,
		"fallback": "lucide-lab:luggage-cabin",
	});
}

export default Component;
