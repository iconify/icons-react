import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqxty8b1p.css';
import '../../css/k/kvl9ucc0s.css';
import '../../css/x/xuhpwqi5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqxty8b1p"/><path class="kvl9ucc0s"/><path class="xuhpwqi5q"/>`,
		"fallback": "energy-icons:monitor-play-20",
	});
}

export default Component;
