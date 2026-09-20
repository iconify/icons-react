import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_-dcbbxg.css';
import '../../css/b/b9nh0sb1l.css';
import '../../css/l/lv_7odbrh.css';
import '../../css/o/oct-20b_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_-dcbbxg"/><path class="b9nh0sb1l"/><path class="lv_7odbrh"/><path class="oct-20b_z"/>`,
		"fallback": "selfhst:subtrackr",
	});
}

export default Component;
