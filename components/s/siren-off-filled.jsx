import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyljurtoy.css';
import '../../css/b/bqclo9bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyljurtoy"/><path class="bqclo9bhl"/>`,
		"fallback": "lucide-extended:siren-off-filled",
	});
}

export default Component;
