import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nb1d4fcis.css';
import '../../css/g/gf98vm77j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nb1d4fcis"/><path class="gf98vm77j"/></g>`,
		"fallback": "iconoir:spock-hand-gesture",
	});
}

export default Component;
