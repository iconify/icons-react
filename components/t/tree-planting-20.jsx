import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-wmmyb1y.css';
import '../../css/g/gl50l81hz.css';
import '../../css/x/xhaspmuql.css';
import '../../css/c/codgvacjt.css';
import '../../css/n/nmlry0bzq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-wmmyb1y"/><path class="gl50l81hz"/><path class="xhaspmuql"/><path class="codgvacjt"/><path class="nmlry0bzq"/>`,
		"fallback": "energy-icons:tree-planting-20",
	});
}

export default Component;
