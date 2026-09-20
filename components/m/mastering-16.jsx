import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bys6omaow.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bys6omaow"/>`,
		"fallback": "qlementine-icons:mastering-16",
	});
}

export default Component;
