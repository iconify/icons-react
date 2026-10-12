import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hchuaz8ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hchuaz8ae"/>`,
		"fallback": "lucide-extended:panel-left-filled",
	});
}

export default Component;
