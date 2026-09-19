import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nla2lvbqy.css';
import '../../css/x/xvv_svbqr.css';
import '../../css/j/jr6euqw6a.css';
import '../../css/y/yzn7z5b6v.css';
import '../../css/j/jxgdiw6pd.css';
import '../../css/r/rj9igxbdl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nla2lvbqy"/><path class="xvv_svbqr"/><path class="jr6euqw6a"/><path class="yzn7z5b6v"/><path class="jxgdiw6pd"/><path class="rj9igxbdl"/></g>`,
		"fallback": "catppuccin:nix",
	});
}

export default Component;
