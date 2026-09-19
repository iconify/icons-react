import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix46sucxf.css';
import '../../css/b/b8r_gt97w.css';
import '../../css/f/ffi5rls9b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix46sucxf"/><path class="b8r_gt97w"/><path class="ffi5rls9b"/>`,
		"fallback": "ep:school",
	});
}

export default Component;
