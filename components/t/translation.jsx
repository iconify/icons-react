import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip7fo_bgm.css';
import '../../css/d/db48s2fzd.css';
import '../../css/t/trzudzbao.css';
import '../../css/r/r97ruqj2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer ip7fo_bgm"/><path class="db48s2fzd duoicon-primary-layer"/><path class="duoicon-secondary-layer trzudzbao"/><path class="duoicon-primary-layer r97ruqj2l"/>`,
		"fallback": "duo-icons:translation",
	});
}

export default Component;
