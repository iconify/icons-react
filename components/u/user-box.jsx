import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jq6j-7brw.css';
import '../../css/p/pwbt2qflx.css';
import '../../css/j/jgjjp7t-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="jq6j-7brw"/><circle class="pwbt2qflx"/><rect class="jgjjp7t-j"/></g>`,
		"fallback": "lets-icons:user-box",
	});
}

export default Component;
