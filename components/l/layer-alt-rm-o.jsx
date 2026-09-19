import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb9vjab-c.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb9vjab-c"/>`,
		"fallback": "gis:layer-alt-rm-o",
	});
}

export default Component;
