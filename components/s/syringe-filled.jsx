import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4mad_nxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k4mad_nxd"/>`,
		"fallback": "lucide-extended:syringe-filled",
	});
}

export default Component;
