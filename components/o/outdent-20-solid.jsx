import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p477_fbow.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p477_fbow"/>`,
		"fallback": "sidekickicons:outdent-20-solid",
	});
}

export default Component;
