import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyio3f53g.css';
import '../../css/i/i-6ptsbat.css';
import '../../css/f/ff938qbsv.css';
import '../../css/m/mkxsbib5h.css';
import '../../css/p/pe07zqb4w.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged wyio3f53g"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged i-6ptsbat"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged ff938qbsv"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged mkxsbib5h"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged pe07zqb4w"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-6--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:server-outline-badged",
	});
}

export default Component;
