import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdg726bhb.css';
import '../../css/e/e74mzrb2k.css';
import '../../css/v/v_mr9f9tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdg726bhb"/><path clip-rule="evenodd" class="e74mzrb2k"/><path class="v_mr9f9tj"/>`,
		"fallback": "mingcute:qrcode-2-fill",
	});
}

export default Component;
