import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/scnak0aak.css';
import '../../css/y/ytd1ty3sp.css';
import '../../css/l/l4m659k1r.css';
import '../../css/l/lnsoa8bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="scnak0aak"/><path class="ytd1ty3sp"/></g><path class="l4m659k1r"/><path class="lnsoa8bqt"/>`,
		"fallback": "solar:layers-minimalistic-bold-duotone",
	});
}

export default Component;
