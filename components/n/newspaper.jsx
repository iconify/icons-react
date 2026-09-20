import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1rmevb5d.css';
import '../../css/s/sa9ni4pvz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1rmevb5d"/><path class="sa9ni4pvz"/>`,
		"fallback": "vaadin:newspaper",
	});
}

export default Component;
