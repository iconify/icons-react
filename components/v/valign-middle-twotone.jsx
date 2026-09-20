import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt0hkp.css';
import '../../css/s/s1ui7u.css';
import '../../css/x/xb-a0u.css';
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
		"content": `<path class="jt0hkp s1ui7u"/><path class="s1ui7u xb-a0u"/>`,
		"fallback": "line-md:valign-middle-twotone",
	});
}

export default Component;
