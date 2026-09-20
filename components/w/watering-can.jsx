import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haj2_seqp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haj2_seqp"/>`,
		"fallback": "pinhead:watering-can",
	});
}

export default Component;
