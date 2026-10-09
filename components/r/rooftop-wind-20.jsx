import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6julkbke.css';
import '../../css/t/t5m9mnbka.css';
import '../../css/x/x67cv140v.css';
import '../../css/x/xwei6nojw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6julkbke"/><path class="t5m9mnbka"/><path class="x67cv140v"/><path class="xwei6nojw"/>`,
		"fallback": "energy-icons:rooftop-wind-20",
	});
}

export default Component;
