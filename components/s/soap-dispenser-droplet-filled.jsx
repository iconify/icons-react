import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q86b8g1uw.css';
import '../../css/x/x5qh69bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q86b8g1uw"/><path clip-rule="evenodd" class="x5qh69bjy"/>`,
		"fallback": "lucide-extended:soap-dispenser-droplet-filled",
	});
}

export default Component;
