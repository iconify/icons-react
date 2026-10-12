import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkvkheb0s.css';
import '../../css/c/ci5ggcbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkvkheb0s"/><path class="ci5ggcbfg"/>`,
		"fallback": "lucide-extended:smartphone-nfc-filled",
	});
}

export default Component;
