import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8jlkgbbp.css';
import '../../css/p/p_mrm8qto.css';
import '../../css/o/oayagp0-d.css';
import '../../css/g/g13jgl9wr.css';
import '../../css/r/rv4dr434i.css';
import '../../css/x/xjl91t_xi.css';
import '../../css/j/j4mjgj17p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8jlkgbbp"/><path class="p_mrm8qto"/><path class="oayagp0-d"/><path class="g13jgl9wr"/><path class="rv4dr434i"/><path class="xjl91t_xi"/><path class="j4mjgj17p"/>`,
		"fallback": "ion:no-smoking",
	});
}

export default Component;
