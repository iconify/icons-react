import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc07x3xxz.css';
import '../../css/v/vif4xej-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hc07x3xxz"/><path class="vif4xej-z"/>`,
		"fallback": "lucide-extended:panel-top-open-filled",
	});
}

export default Component;
