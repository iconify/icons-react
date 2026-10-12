import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng18x5bhl.css';
import '../../css/b/bdg69fb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ng18x5bhl"/><path class="bdg69fb8a"/>`,
		"fallback": "lucide-extended:tag-plus-filled",
	});
}

export default Component;
