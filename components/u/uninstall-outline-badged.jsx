import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir3jylx1q.css';
import '../../css/w/wiln9-3zf.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged ir3jylx1q"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged wiln9-3zf"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:uninstall-outline-badged",
	});
}

export default Component;
