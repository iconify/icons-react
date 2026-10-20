import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzclhm7wd.css';
import '../../css/l/lv7wocbph.css';
import '../../css/c/cc4mncs3v.css';
import '../../css/n/n330h3bcs.css';

const viewBox = {"width":35.402,"height":11.519};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzclhm7wd"/><path class="lv7wocbph"/><path class="cc4mncs3v"/><path class="n330h3bcs"/>`,
		"fallback": "thesvg-color:oporto",
	});
}

export default Component;
