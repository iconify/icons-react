import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4-7eu8rv.css';
import '../../css/f/f84x_gb3e.css';
import '../../css/o/of7d1zb9r.css';
import '../../css/j/jf59lk74x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4-7eu8rv"/><circle class="f84x_gb3e"/><circle class="of7d1zb9r"/><path class="jf59lk74x"/>`,
		"fallback": "lineicons:tounge",
	});
}

export default Component;
