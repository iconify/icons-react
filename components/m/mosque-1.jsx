import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmdpr8b1x.css';
import '../../css/i/iysxbi1pg.css';
import '../../css/v/vhnu_io7d.css';
import '../../css/r/rh3b5mb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmdpr8b1x"/><path class="iysxbi1pg"/><path class="vhnu_io7d"/><path class="rh3b5mb2s"/></g>`,
		"fallback": "tdesign:mosque-1",
	});
}

export default Component;
