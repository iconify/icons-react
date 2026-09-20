import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfnsh61-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfnsh61-s"/>`,
		"fallback": "lucide-lab:shorts",
	});
}

export default Component;
