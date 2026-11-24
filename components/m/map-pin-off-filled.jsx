import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da33ryhuh.css';
import '../../css/g/gnqvxofvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="da33ryhuh"/><path class="gnqvxofvw"/>`,
		"fallback": "lucide-extended:map-pin-off-filled",
	});
}

export default Component;
