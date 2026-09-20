import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dykvwujvw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dykvwujvw"/>`,
		"fallback": "pinhead:person-standing-wearing-dress-beside-child-standing-beside-broadshouldered-person-standing",
	});
}

export default Component;
