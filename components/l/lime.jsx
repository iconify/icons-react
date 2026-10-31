import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y01l-xu0e.css';
import '../../css/d/dzfzn_bkw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y01l-xu0e"/><path class="dzfzn_bkw"/>`,
		"fallback": "iconito:lime",
	});
}

export default Component;
