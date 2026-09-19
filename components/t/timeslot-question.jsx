import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3doeqbkg.css';

const viewBox = {"width":2560,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3doeqbkg"/>`,
		"fallback": "vs:timeslot-question",
	});
}

export default Component;
