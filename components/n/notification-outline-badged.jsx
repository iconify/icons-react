import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsx2n78yf.css';
import '../../css/n/n-7eab0te.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged gsx2n78yf"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged n-7eab0te"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-1--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:notification-outline-badged",
	});
}

export default Component;
