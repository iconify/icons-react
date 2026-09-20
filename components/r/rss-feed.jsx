import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncfm_9bnf.css';
import '../../css/e/e0nysjjqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ncfm_9bnf"/><path class="e0nysjjqw"/></g>`,
		"fallback": "streamline-ultimate:rss-feed",
	});
}

export default Component;
