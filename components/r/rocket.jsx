import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqibyvg5x.css';
import '../../css/w/wwyne7smp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqibyvg5x"/><path class="wwyne7smp"/>`,
		"fallback": "vaadin:rocket",
	});
}

export default Component;
