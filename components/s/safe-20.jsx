import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsc21xyjd.css';
import '../../css/j/j9dld7jrj.css';
import '../../css/i/ipo79vlap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsc21xyjd"/><path class="j9dld7jrj"/><path class="ipo79vlap"/>`,
		"fallback": "energy-icons:safe-20",
	});
}

export default Component;
