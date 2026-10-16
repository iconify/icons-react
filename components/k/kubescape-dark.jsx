import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrzzj06nr.css';
import '../../css/x/xvs47lv8y.css';
import '../../css/a/awrj17bcs.css';
import '../../css/r/r2dqdacfq.css';

const viewBox = {"width":126.7,"height":116.85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrzzj06nr"/><path class="xvs47lv8y"/><path class="awrj17bcs"/><path class="r2dqdacfq"/>`,
		"fallback": "thesvg-color:kubescape-dark",
	});
}

export default Component;
