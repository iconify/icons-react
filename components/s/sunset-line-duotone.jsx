import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt7j86jjt.css';
import '../../css/c/cjpkl_0zw.css';
import '../../css/l/l6md27rub.css';
import '../../css/q/qwaj5cb8s.css';
import '../../css/l/lgwh98i9y.css';
import '../../css/j/je0pbq8pu.css';
import '../../css/x/xnx0ex6ho.css';
import '../../css/n/n8-rodbwi.css';
import '../../css/s/sr0sjvhrz.css';
import '../../css/w/wtg12y1vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lt7j86jjt"/><path class="cjpkl_0zw"/><path class="l6md27rub"/><path class="qwaj5cb8s"/><path class="lgwh98i9y"/><path class="je0pbq8pu"/><path class="xnx0ex6ho"/><path class="n8-rodbwi"/><path class="sr0sjvhrz"/><path class="wtg12y1vi"/></g>`,
		"fallback": "solar:sunset-line-duotone",
	});
}

export default Component;
