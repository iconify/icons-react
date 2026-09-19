import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4x_-sbkd.css';
import '../../css/y/ygd5m2cql.css';
import '../../css/q/qpsx1tb8r.css';
import '../../css/g/g1wwqbbga.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted d4x_-sbkd"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted ygd5m2cql"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted qpsx1tb8r"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted g1wwqbbga"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:router-outline-alerted",
	});
}

export default Component;
