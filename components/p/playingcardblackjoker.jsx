import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovs9leduw.css';
import '../../css/l/lmj936ytl.css';
import '../../css/n/n4e9bgbon.css';
import '../../css/w/wn50yebkn.css';
import '../../css/k/km363hlug.css';
import '../../css/y/yxjb7sbtw.css';
import '../../css/z/zmba6acww.css';
import '../../css/i/is7t6t33z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovs9leduw"/><path class="lmj936ytl"/><path class="n4e9bgbon"/><path class="wn50yebkn"/><path class="km363hlug"/><path class="yxjb7sbtw"/><path class="zmba6acww"/><path class="is7t6t33z"/>`,
		"fallback": "fxemoji:playingcardblackjoker",
	});
}

export default Component;
