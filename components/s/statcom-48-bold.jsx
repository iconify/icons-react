import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orvizdb2o.css';
import '../../css/h/hluiizbfv.css';
import '../../css/b/b0n25wb5s.css';
import '../../css/i/i1sd5pehr.css';
import '../../css/v/v0ka02b9c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orvizdb2o"/><path class="hluiizbfv"/><path class="b0n25wb5s"/><path class="i1sd5pehr"/><path class="v0ka02b9c"/>`,
		"fallback": "energy-icons:statcom-48-bold",
	});
}

export default Component;
