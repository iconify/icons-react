import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ypmuh6nnm.css';
import '../../css/j/joyv6hbrv.css';
import '../../css/k/kqbernbwi.css';
import '../../css/l/luapyebft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ypmuh6nnm"/><path class="joyv6hbrv"/><path class="kqbernbwi"/><path class="luapyebft"/></g>`,
		"fallback": "catppuccin:msbuild",
	});
}

export default Component;
