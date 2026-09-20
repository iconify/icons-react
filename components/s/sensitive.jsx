import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi_ym-bhd.css';
import '../../css/d/d6kw7zb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi_ym-bhd"/><path class="d6kw7zb0t"/>`,
		"fallback": "stash:sensitive",
	});
}

export default Component;
