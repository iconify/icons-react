import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbo3gpfgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbo3gpfgt"/>`,
		"fallback": "lucide-extended:monitor-off-filled",
	});
}

export default Component;
