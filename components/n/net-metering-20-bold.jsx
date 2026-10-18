import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3cdfdc7r.css';
import '../../css/h/hhu4-ib3s.css';
import '../../css/l/l1yyp3cyj.css';
import '../../css/x/xv00olu6r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3cdfdc7r"/><path class="hhu4-ib3s"/><path class="l1yyp3cyj"/><path class="xv00olu6r"/>`,
		"fallback": "energy-icons:net-metering-20-bold",
	});
}

export default Component;
