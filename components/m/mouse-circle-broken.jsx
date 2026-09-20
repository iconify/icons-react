import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sa6gy3ztr.css';
import '../../css/n/n3fmk5byk.css';
import '../../css/b/b6enbdbml.css';
import '../../css/n/n5shqk82c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sa6gy3ztr"/><path class="n3fmk5byk"/><path class="b6enbdbml"/><path class="n5shqk82c"/></g>`,
		"fallback": "solar:mouse-circle-broken",
	});
}

export default Component;
