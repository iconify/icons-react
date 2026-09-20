import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnghg2bjh.css';
import '../../css/f/f7ef8jq2f.css';
import '../../css/x/xtctq8bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnghg2bjh"/><path class="f7ef8jq2f"/><path class="xtctq8bmg"/>`,
		"fallback": "octicon:unfold-24",
	});
}

export default Component;
