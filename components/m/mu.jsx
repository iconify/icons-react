import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r4blj6b3g.css';
import '../../css/n/njphwbz6x.css';
import '../../css/o/ohcwwnbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="r4blj6b3g"/><path class="njphwbz6x"/><path class="ohcwwnbis"/></g>`,
		"fallback": "matita:mu",
	});
}

export default Component;
