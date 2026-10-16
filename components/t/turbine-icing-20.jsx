import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss9ptiz3a.css';
import '../../css/z/zgksttbub.css';
import '../../css/y/yjufhcc8t.css';
import '../../css/u/uj36_n52s.css';
import '../../css/g/gp7-kkbns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss9ptiz3a"/><path class="zgksttbub"/><path class="yjufhcc8t"/><path class="uj36_n52s"/><path class="gp7-kkbns"/>`,
		"fallback": "energy-icons:turbine-icing-20",
	});
}

export default Component;
