import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsc6fq3ty.css';
import '../../css/s/skmwvibla.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dsc6fq3ty"/><path class="skmwvibla"/>`,
		"fallback": "thesvg-color:mongo-express",
	});
}

export default Component;
