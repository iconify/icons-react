import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw_qod65h.css';
import '../../css/h/hyjd_db4w.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw_qod65h"/><path class="hyjd_db4w"/>`,
		"fallback": "flag:se-4x3",
	});
}

export default Component;
