import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9unpoggu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9unpoggu"/>`,
		"fallback": "pinhead:person-holding-chestfeeding-baby",
	});
}

export default Component;
