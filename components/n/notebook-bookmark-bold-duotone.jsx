import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygwht93_n.css';
import '../../css/l/lmf91iz2i.css';
import '../../css/h/ha54h0vkg.css';
import '../../css/y/ydyerrbhj.css';
import '../../css/h/h6w61wbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ygwht93_n"/><path class="lmf91iz2i"/><path class="ha54h0vkg"/><path class="ydyerrbhj"/><path class="h6w61wbcl"/>`,
		"fallback": "solar:notebook-bookmark-bold-duotone",
	});
}

export default Component;
