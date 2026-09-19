import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnlnjbcmb.css';
import '../../css/e/exdnk9b2b.css';
import '../../css/z/z1jg2ibea.css';
import '../../css/j/jiqf9lbqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnlnjbcmb"/><path class="exdnk9b2b"/><path class="z1jg2ibea"/><path class="jiqf9lbqx"/>`,
		"fallback": "carbon:save-annotation",
	});
}

export default Component;
