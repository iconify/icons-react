import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0a04rwms.css';
import '../../css/v/vlwih1bec.css';
import '../../css/l/lwsxc47kb.css';
import '../../css/k/kkhl62fff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z0a04rwms"/><path class="vlwih1bec"/><path class="lwsxc47kb"/><path class="kkhl62fff"/>`,
		"fallback": "solar:password-minimalistic-input-outline",
	});
}

export default Component;
