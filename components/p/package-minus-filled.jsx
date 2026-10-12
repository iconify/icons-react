import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auv8y4bny.css';
import '../../css/m/mhso12ngf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="auv8y4bny"/><path class="mhso12ngf"/>`,
		"fallback": "lucide-extended:package-minus-filled",
	});
}

export default Component;
