import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nla2lvbqy.css';
import '../../css/x/xvv_svbqr.css';
import '../../css/j/jr6euqw6a.css';
import '../../css/q/qjin41bbi.css';
import '../../css/i/i_eoyepud.css';
import '../../css/r/rj9igxbdl.css';
import '../../css/a/avwrpqfiu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nla2lvbqy"/><path class="xvv_svbqr"/><path class="jr6euqw6a"/><path class="qjin41bbi"/><path class="i_eoyepud"/><path class="rj9igxbdl"/></g><path class="avwrpqfiu"/>`,
		"fallback": "catppuccin:nix-lock",
	});
}

export default Component;
