import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qh-atnbwx.css';
import '../../css/r/r-s75uqqs.css';
import '../../css/x/xwtu-rbhj.css';
import '../../css/c/ccjp42_uk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect transform="matrix(1 0 0 -1 6 14)" class="qh-atnbwx"/><rect transform="matrix(1 0 0 -1 6 28)" class="qh-atnbwx"/><path class="r-s75uqqs"/><path class="xwtu-rbhj"/><path class="ccjp42_uk"/></g>`,
		"fallback": "icon-park:send-backward",
	});
}

export default Component;
