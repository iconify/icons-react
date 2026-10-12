import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjna77bsx.css';
import '../../css/z/z02gnab-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjna77bsx"/><path clip-rule="evenodd" class="z02gnab-f"/>`,
		"fallback": "lucide-extended:shrimp-filled",
	});
}

export default Component;
