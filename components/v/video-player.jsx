import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-pk0124j.css';
import '../../css/p/pkrnu1boa.css';
import '../../css/z/z060njbsn.css';
import '../../css/v/v85p-2hxm.css';
import '../../css/l/lbqa99bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-pk0124j"/><path class="pkrnu1boa"/><path class="z060njbsn"/><path class="v85p-2hxm"/><path class="lbqa99bgk"/></g>`,
		"fallback": "streamline-ultimate-color:video-player",
	});
}

export default Component;
