import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pw23ckb-m.css';
import '../../css/d/dzdu3tbka.css';
import '../../css/r/rwx8arbdh.css';
import '../../css/d/dbwmo8bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pw23ckb-m wm-k"/><path class="dzdu3tbka wm-shadow"/><path class="rwx8arbdh wm-k"/><path class="dbwmo8bvj wm-a"/></g>`,
		"fallback": "withicons:washing-machine-engrave",
	});
}

export default Component;
