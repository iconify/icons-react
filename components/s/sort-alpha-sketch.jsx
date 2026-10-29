import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vlc8tibye.css';
import '../../css/v/vm2k2nbdb.css';
import '../../css/j/jnfxqfkap.css';
import '../../css/b/biro68bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vlc8tibye wm-k"/><path class="vm2k2nbdb wm-a"/><path class="jnfxqfkap wm-k"/><path class="biro68bio wm-a"/></g>`,
		"fallback": "withicons:sort-alpha-sketch",
	});
}

export default Component;
