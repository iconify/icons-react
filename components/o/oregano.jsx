import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgwxuac0h.css';
import '../../css/b/bbzbypbsp.css';
import '../../css/w/wpc3x9bjb.css';
import '../../css/z/zx_78cd7a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgwxuac0h"/><path class="bbzbypbsp"/><path class="wpc3x9bjb"/><path class="zx_78cd7a"/>`,
		"fallback": "iconito:oregano",
	});
}

export default Component;
