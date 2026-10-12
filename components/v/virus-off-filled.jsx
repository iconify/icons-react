import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsfup6hkd.css';
import '../../css/m/mwsqe_7mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dsfup6hkd"/><path class="mwsqe_7mb"/>`,
		"fallback": "lucide-extended:virus-off-filled",
	});
}

export default Component;
