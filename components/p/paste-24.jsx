import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o75vn0b-t.css';
import '../../css/k/kbzcbrwur.css';
import '../../css/w/wukahqb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o75vn0b-t"/><path class="kbzcbrwur"/><path clip-rule="evenodd" class="wukahqb_c"/>`,
		"fallback": "qlementine-icons:paste-24",
	});
}

export default Component;
