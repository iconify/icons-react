import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mq0rc7rom.css';
import '../../css/q/qvj2s8b-s.css';
import '../../css/z/zzl9b5n1t.css';
import '../../css/t/tpt-ohrro.css';
import '../../css/j/jiyp4ybyo.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/b/b9j7mod-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mq0rc7rom wm-k"/><path class="qvj2s8b-s wm-a"/><path class="wm-s zzl9b5n1t"/><path class="tpt-ohrro wm-shadow"/><path class="jiyp4ybyo wm-k"/><path class="a91ndtnyb wm-k"/><path class="v-dzpkwlt wm-a"/><path class="b9j7mod-z wm-s"/></g>`,
		"fallback": "withicons:package-check-engrave",
	});
}

export default Component;
