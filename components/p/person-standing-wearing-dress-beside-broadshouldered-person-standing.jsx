import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln0831wbk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln0831wbk"/>`,
		"fallback": "pinhead:person-standing-wearing-dress-beside-broadshouldered-person-standing",
	});
}

export default Component;
