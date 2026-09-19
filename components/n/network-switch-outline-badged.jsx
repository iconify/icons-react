import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpiv946-w.css';
import '../../css/m/mz5d4wbgm.css';
import '../../css/s/s2a7yel-p.css';
import '../../css/v/vh_d_6vor.css';
import '../../css/g/gv8y0mspx.css';
import '../../css/z/zisfjpbgh.css';
import '../../css/g/gjody7b2r.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged mpiv946-w"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged mz5d4wbgm"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged s2a7yel-p"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged vh_d_6vor"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged gv8y0mspx"/><path class="clr-i-outline--badged clr-i-outline-path-6--badged zisfjpbgh"/><path class="clr-i-outline--badged clr-i-outline-path-7--badged gjody7b2r"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-8--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:network-switch-outline-badged",
	});
}

export default Component;
