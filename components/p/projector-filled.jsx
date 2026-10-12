import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6vzrquwp.css';
import '../../css/k/k_0sx3bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6vzrquwp"/><path class="k_0sx3bjc"/>`,
		"fallback": "lucide-extended:projector-filled",
	});
}

export default Component;
