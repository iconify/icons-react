import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foq2a6bdh.css';
import '../../css/m/mp780dcuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foq2a6bdh"/><path class="mp780dcuh"/>`,
		"fallback": "lucide-extended:mail-question-mark-filled",
	});
}

export default Component;
