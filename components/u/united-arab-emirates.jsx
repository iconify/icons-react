import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se6y1yzlf.css';
import '../../css/e/efjm0sm3v.css';
import '../../css/y/yat6ahbpa.css';
import '../../css/f/f2544_n4i.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se6y1yzlf"/><path class="efjm0sm3v"/><path class="yat6ahbpa"/><path class="f2544_n4i"/>`,
		"fallback": "tabler-flags:united-arab-emirates",
	});
}

export default Component;
