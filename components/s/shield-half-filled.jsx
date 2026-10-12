import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsixo77yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsixo77yp"/>`,
		"fallback": "lucide-extended:shield-half-filled",
	});
}

export default Component;
