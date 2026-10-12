import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvnvmob9i.css';
import '../../css/u/u769r-biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvnvmob9i"/><path clip-rule="evenodd" class="u769r-biz"/>`,
		"fallback": "lucide-extended:mouse-off-filled",
	});
}

export default Component;
