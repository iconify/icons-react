import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mq0rc7rom.css';
import '../../css/q/qvj2s8b-s.css';
import '../../css/p/pzemj-bhd.css';
import '../../css/l/lmqqh7b0t.css';
import '../../css/j/jiyp4ybyo.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/s/szzmfoboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mq0rc7rom wm-k"/><path class="qvj2s8b-s wm-a"/><path class="pzemj-bhd wm-s"/><path class="lmqqh7b0t wm-shadow"/><path class="jiyp4ybyo wm-k"/><path class="a91ndtnyb wm-k"/><path class="v-dzpkwlt wm-a"/><path class="szzmfoboo wm-s"/></g>`,
		"fallback": "withicons:package-plus-engrave",
	});
}

export default Component;
