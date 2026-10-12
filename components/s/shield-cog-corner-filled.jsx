import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/supw_uxls.css';
import '../../css/a/a_g1h2blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="supw_uxls"/><path clip-rule="evenodd" class="a_g1h2blr"/>`,
		"fallback": "lucide-extended:shield-cog-corner-filled",
	});
}

export default Component;
