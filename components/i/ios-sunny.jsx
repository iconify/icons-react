import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls1z86kcz.css';
import '../../css/m/me6zin5nw.css';
import '../../css/l/lggs74txb.css';
import '../../css/b/btg4tz6ob.css';
import '../../css/y/yq9poubvn.css';
import '../../css/o/o7913hb-b.css';
import '../../css/j/j731slqkh.css';
import '../../css/q/qvyqpo_nj.css';
import '../../css/j/jcmlftb2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls1z86kcz"/><path class="me6zin5nw"/><path class="lggs74txb"/><path class="btg4tz6ob"/><path class="yq9poubvn"/><path class="o7913hb-b"/><path class="j731slqkh"/><path class="qvyqpo_nj"/><path class="jcmlftb2k"/>`,
		"fallback": "ion:ios-sunny",
	});
}

export default Component;
