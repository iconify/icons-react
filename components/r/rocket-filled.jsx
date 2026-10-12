import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogx29lbfw.css';
import '../../css/a/azwen8bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogx29lbfw"/><path clip-rule="evenodd" class="azwen8bub"/>`,
		"fallback": "lucide-extended:rocket-filled",
	});
}

export default Component;
