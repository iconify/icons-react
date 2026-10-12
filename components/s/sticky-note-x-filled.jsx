import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9j0j5byc.css';
import '../../css/s/suv5jb35a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9j0j5byc"/><path class="suv5jb35a"/>`,
		"fallback": "lucide-extended:sticky-note-x-filled",
	});
}

export default Component;
