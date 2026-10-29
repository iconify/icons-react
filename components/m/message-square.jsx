import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5t13ub5b.css';
import '../../css/r/ra85-tbry.css';
import '../../css/h/h1grhgbhf.css';
import '../../css/c/cgqmxpbhk.css';
import '../../css/z/zbmxucbco.css';
import '../../css/a/a-ryaqb4z.css';
import '../../css/k/kqvsy0bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5t13ub5b wm-shadow"/><path class="ra85-tbry wm-k"/><path class="h1grhgbhf wm-k"/><path class="cgqmxpbhk wm-k"/><path class="wm-k zbmxucbco"/><path class="a-ryaqb4z wm-k"/><path class="kqvsy0bhb wm-shine"/>`,
		"fallback": "withicons-pastel:message-square",
	});
}

export default Component;
