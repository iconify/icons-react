import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuukrub9f.css';
import '../../css/h/h1a7cab_d.css';
import '../../css/l/l96x703eu.css';
import '../../css/a/azi5c4blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuukrub9f"/><path class="h1a7cab_d"/><path class="l96x703eu"/><path class="azi5c4blo"/>`,
		"fallback": "prime:sliders-h",
	});
}

export default Component;
