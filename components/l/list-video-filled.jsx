import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmhg7bc2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmhg7bc2k"/>`,
		"fallback": "lucide-extended:list-video-filled",
	});
}

export default Component;
