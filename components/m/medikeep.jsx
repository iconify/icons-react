import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzf8dc2zn.css';
import '../../css/q/qxiuwe1zk.css';
import '../../css/e/eer3mwnpz.css';
import '../../css/q/qwq0l67ot.css';
import '../../css/a/anq1cwbxn.css';
import '../../css/u/utlrnyquw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzf8dc2zn"/><path class="qxiuwe1zk"/><path class="eer3mwnpz"/><path class="qwq0l67ot"/><path class="anq1cwbxn"/><path class="utlrnyquw"/>`,
		"fallback": "selfhst:medikeep",
	});
}

export default Component;
