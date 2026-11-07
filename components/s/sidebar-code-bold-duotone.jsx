import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1nbikbny.css';
import '../../css/f/f_j97dnah.css';
import '../../css/d/de3eyw6ce.css';
import '../../css/x/xi5_4obqg.css';
import '../../css/f/f997n7bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1nbikbny"/><path class="f_j97dnah"/><path class="de3eyw6ce"/><path class="xi5_4obqg"/><path class="f997n7bqa"/>`,
		"fallback": "solar:sidebar-code-bold-duotone",
	});
}

export default Component;
