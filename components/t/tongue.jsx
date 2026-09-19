import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg9et_bct.css';
import '../../css/j/j9xiqe_ui.css';
import '../../css/z/zyroygmzd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg9et_bct"/><path class="j9xiqe_ui"/><path class="zyroygmzd"/>`,
		"fallback": "fxemoji:tongue",
	});
}

export default Component;
