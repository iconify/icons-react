import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iycazvbqg.css';

const viewBox = {"width":2624,"height":2016};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iycazvbqg"/>`,
		"fallback": "vs:people-group",
	});
}

export default Component;
