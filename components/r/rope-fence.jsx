import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvxwz-brr.css';
import '../../css/z/zpzbcrshu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvxwz-brr"/><path class="zpzbcrshu"/>`,
		"fallback": "temaki:rope-fence",
	});
}

export default Component;
