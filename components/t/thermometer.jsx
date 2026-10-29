import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvxzpacfj.css';
import '../../css/c/ct7sk1bjh.css';
import '../../css/q/q0_8skbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvxzpacfj wm-k"/><path class="ct7sk1bjh wm-k"/><path class="q0_8skbgb wm-a"/>`,
		"fallback": "withicons-bauhaus:thermometer",
	});
}

export default Component;
