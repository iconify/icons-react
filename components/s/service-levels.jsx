import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntlbgtbho.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/j/j5z--zobz.css';
import '../../css/t/tffiggcyh.css';
import '../../css/g/guadj6bsg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ntlbgtbho"/><circle class="f-ksdqydc"/><circle class="j5z--zobz"/><circle class="tffiggcyh"/><path class="guadj6bsg"/>`,
		"fallback": "carbon:service-levels",
	});
}

export default Component;
