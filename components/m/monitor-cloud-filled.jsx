import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgqe2rbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgqe2rbxh"/>`,
		"fallback": "lucide-extended:monitor-cloud-filled",
	});
}

export default Component;
