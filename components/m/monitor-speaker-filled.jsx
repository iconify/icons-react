import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxwu0fb2r.css';
import '../../css/i/i11fypbyz.css';
import '../../css/z/zz61lgz8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxwu0fb2r"/><path clip-rule="evenodd" class="i11fypbyz"/><path class="zz61lgz8g"/>`,
		"fallback": "lucide-extended:monitor-speaker-filled",
	});
}

export default Component;
