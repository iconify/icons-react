import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um2qinbzz.css';
import '../../css/x/xmtv_yb1w.css';
import '../../css/h/h8qh1hbry.css';
import '../../css/k/kmrbtgwfe.css';
import '../../css/f/fd2g_ro9z.css';
import '../../css/j/j5xqj2bxy.css';
import '../../css/i/i77xnyd9y.css';
import '../../css/j/j396bcfrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um2qinbzz"/><path class="xmtv_yb1w"/><path class="h8qh1hbry"/><path class="kmrbtgwfe"/><path class="fd2g_ro9z"/><path class="j5xqj2bxy"/><path class="i77xnyd9y"/><path class="j396bcfrv"/>`,
		"fallback": "streamline-emojis:tongue",
	});
}

export default Component;
