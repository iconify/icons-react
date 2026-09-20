import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g15gpjk6g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g15gpjk6g"/>`,
		"fallback": "pinhead:person-snowshoeing",
	});
}

export default Component;
