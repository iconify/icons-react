import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xk-xwp3yf.css';
import '../../css/k/kzeg54b4h.css';
import '../../css/d/dbde4mbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="xk-xwp3yf"/><rect class="kzeg54b4h"/><path class="dbde4mbnh"/></g>`,
		"fallback": "lucide-lab:sushi",
	});
}

export default Component;
