import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqlsd2b2r.css';
import '../../css/a/aepwucb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqlsd2b2r"/><path class="aepwucb-t"/>`,
		"fallback": "lucide-extended:speech-filled",
	});
}

export default Component;
