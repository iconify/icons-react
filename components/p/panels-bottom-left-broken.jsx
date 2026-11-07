import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tcg0b8fzd.css';
import '../../css/y/yzl97151b.css';
import '../../css/a/a20bergfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tcg0b8fzd"/><path class="yzl97151b"/><path class="a20bergfi"/></g>`,
		"fallback": "solar:panels-bottom-left-broken",
	});
}

export default Component;
