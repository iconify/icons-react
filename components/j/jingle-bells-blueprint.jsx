import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bfgi9essg.css';
import '../../css/o/oykydqjmq.css';
import '../../css/e/eso6vwbue.css';
import '../../css/l/ll7svlg2u.css';
import '../../css/d/d-isrd9sw.css';
import '../../css/c/ccdty3b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bfgi9essg wm-deco"/><path class="oykydqjmq wm-deco"/><path class="eso6vwbue wm-deco"/><path class="ll7svlg2u wm-k"/><path class="d-isrd9sw wm-a"/><path class="ccdty3b5o wm-s"/></g>`,
		"fallback": "withicons:jingle-bells-blueprint",
	});
}

export default Component;
