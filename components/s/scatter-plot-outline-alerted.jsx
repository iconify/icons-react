import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmk6nb6wm.css';
import '../../css/s/s2jvy2blx.css';
import '../../css/g/gs0aklbvc.css';
import '../../css/j/jyuuws0ht.css';
import '../../css/e/egbtnbclf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmk6nb6wm clr-i-outline--alerted clr-i-outline-path-1--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted s2jvy2blx"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted gs0aklbvc"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted jyuuws0ht"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted egbtnbclf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:scatter-plot-outline-alerted",
	});
}

export default Component;
