import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6x_-9bgk.css';
import '../../css/i/i_knybbhi.css';
import '../../css/k/kw5zaebuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6x_-9bgk wm-k"/><path class="i_knybbhi wm-k"/><path class="kw5zaebuq wm-s"/>`,
		"fallback": "withicons-bauhaus:phone-off",
	});
}

export default Component;
