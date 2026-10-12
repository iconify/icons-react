import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt1f5_b9q.css';
import '../../css/n/nvh489vpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt1f5_b9q"/><path clip-rule="evenodd" class="nvh489vpr"/>`,
		"fallback": "lucide-extended:shield-cog-filled",
	});
}

export default Component;
