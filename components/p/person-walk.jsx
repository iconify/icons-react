import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdvcg_qid.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdvcg_qid"/>`,
		"fallback": "at-icons:person-walk",
	});
}

export default Component;
