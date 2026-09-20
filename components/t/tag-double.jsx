import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q337fgbpm.css';
import '../../css/a/a91wsbs9p.css';
import '../../css/x/xjl4jdb5m.css';
import '../../css/f/f5a45hbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q337fgbpm"/><path class="a91wsbs9p"/><path class="xjl4jdb5m"/><path class="f5a45hbwt"/></g>`,
		"fallback": "streamline-cyber-color:tag-double",
	});
}

export default Component;
