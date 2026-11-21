import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv_vc_2oq.css';
import '../../css/l/lgjscu5ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv_vc_2oq"/><path class="lgjscu5ps"/>`,
		"fallback": "lucide-extended:square-check-big-filled",
	});
}

export default Component;
