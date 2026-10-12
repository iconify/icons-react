import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwd45ta4x.css';
import '../../css/x/xjwgdc_uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwd45ta4x"/><path clip-rule="evenodd" class="xjwgdc_uw"/>`,
		"fallback": "lucide-extended:vault-filled",
	});
}

export default Component;
