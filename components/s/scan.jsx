import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a9vkqabok.css';
import '../../css/r/r4509t42k.css';
import '../../css/j/jop4qnbza.css';
import '../../css/c/csqksxv6u.css';
import '../../css/c/cq9ww5f2y.css';
import '../../css/m/m8clgqebj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a9vkqabok wm-shadow"/><path class="r4509t42k"/><path class="jop4qnbza"/><path class="csqksxv6u"/><path class="cq9ww5f2y wm-shine"/><path class="m8clgqebj wm-deco"/></g>`,
		"fallback": "withicons-sticker:scan",
	});
}

export default Component;
