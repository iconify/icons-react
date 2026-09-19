import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8_gg4bxv.css';
import '../../css/w/wa7uyac8k.css';
import '../../css/t/t7gs68bst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8_gg4bxv"/><path class="wa7uyac8k"/><path class="t7gs68bst"/>`,
		"fallback": "cil:wallpaper",
	});
}

export default Component;
