import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yje-c3cxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yje-c3cxi"/>`,
		"fallback": "lucide-extended:panel-bottom-filled",
	});
}

export default Component;
