import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxur79b5t.css';
import '../../css/y/y95_zrbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxur79b5t"/><path class="y95_zrbmc"/>`,
		"fallback": "lucide-extended:sparkles-filled",
	});
}

export default Component;
