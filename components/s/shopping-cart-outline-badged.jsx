import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc1nhbbxc.css';
import '../../css/j/j3zfux-3r.css';
import '../../css/o/okgv5yoxb.css';
import '../../css/y/ycb9sacuc.css';
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
		"content": `<circle class="clr-i-outline--badged clr-i-outline-path-1--badged uc1nhbbxc"/><circle class="clr-i-outline--badged clr-i-outline-path-2--badged j3zfux-3r"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged okgv5yoxb"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged ycb9sacuc"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shopping-cart-outline-badged",
	});
}

export default Component;
