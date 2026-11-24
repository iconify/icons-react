import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfctapahl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfctapahl"/>`,
		"fallback": "lucide-extended:toothbrush-sparkles-filled",
	});
}

export default Component;
