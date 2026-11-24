import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-wy2pb_f.css';
import '../../css/b/bh7vv0tuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b-wy2pb_f"/><path class="bh7vv0tuw"/>`,
		"fallback": "lucide-extended:milk-off-filled",
	});
}

export default Component;
