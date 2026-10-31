import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy3r-4b1v.css';
import '../../css/b/bjtu_p5xz.css';
import '../../css/v/vv7g44h6d.css';
import '../../css/e/e_x-e_2ba.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy3r-4b1v"/><path class="bjtu_p5xz"/><path class="vv7g44h6d"/><path class="e_x-e_2ba"/>`,
		"fallback": "iconito:onion",
	});
}

export default Component;
