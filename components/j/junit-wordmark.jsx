import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl5yxuxbb.css';
import '../../css/q/qpw537-7f.css';
import '../../css/o/omvhn6b9p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl5yxuxbb"/><path class="qpw537-7f"/><path class="omvhn6b9p"/>`,
		"fallback": "devicon:junit-wordmark",
	});
}

export default Component;
