import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avomhzplk.css';
import '../../css/x/xrwqa-u3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avomhzplk"/><path class="xrwqa-u3m"/>`,
		"fallback": "bxs:tennis-ball",
	});
}

export default Component;
