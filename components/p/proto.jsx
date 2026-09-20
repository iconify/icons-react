import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn0f-q-la.css';
import '../../css/i/iouu_3bvv.css';
import '../../css/p/p2maqeerx.css';
import '../../css/a/asuv_t_id.css';
import '../../css/j/jh6vui6je.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn0f-q-la"/><path class="iouu_3bvv"/><path class="p2maqeerx"/><path class="asuv_t_id"/><path class="jh6vui6je"/>`,
		"fallback": "material-icon-theme:proto",
	});
}

export default Component;
