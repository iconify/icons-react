import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdhc87aim.css';
import '../../css/b/bjaydi71w.css';
import '../../css/d/deitqfq6b.css';
import '../../css/x/xuok7lh9a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdhc87aim"/><circle class="bjaydi71w"/><circle class="deitqfq6b"/><circle class="xuok7lh9a"/>`,
		"fallback": "lineicons:list",
	});
}

export default Component;
