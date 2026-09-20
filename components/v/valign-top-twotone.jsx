import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt0hkp.css';
import '../../css/s/s1ui7u.css';
import '../../css/u/uv8p9w.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt0hkp s1ui7u"/><path class="s1ui7u uv8p9w"/>`,
		"fallback": "line-md:valign-top-twotone",
	});
}

export default Component;
