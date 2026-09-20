import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj_1dobai.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj_1dobai"/>`,
		"fallback": "roentgen:waving-flag",
	});
}

export default Component;
