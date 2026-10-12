import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3yjsomuv.css';
import '../../css/m/msszb5b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3yjsomuv"/><path class="msszb5b2u"/>`,
		"fallback": "lucide-extended:metronome-filled",
	});
}

export default Component;
