import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv595n8kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv595n8kg"/>`,
		"fallback": "vadivam:list-tree",
	});
}

export default Component;
