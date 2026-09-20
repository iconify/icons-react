import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbi7h77fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbi7h77fq"/>`,
		"fallback": "simple-icons:smrt",
	});
}

export default Component;
