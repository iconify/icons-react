import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze3zlmbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze3zlmbzw"/>`,
		"fallback": "lucide-extended:margin-left-filled",
	});
}

export default Component;
