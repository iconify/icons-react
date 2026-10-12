import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwfj1li-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwfj1li-o"/>`,
		"fallback": "lucide-extended:star-filled",
	});
}

export default Component;
