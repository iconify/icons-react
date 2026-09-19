import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnh7u9f3r.css';
import '../../css/v/v_9terb5z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnh7u9f3r"/><path class="v_9terb5z"/>`,
		"fallback": "catppuccin:rust-alt-config",
	});
}

export default Component;
