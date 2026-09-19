import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e39ud6bwf.css';
import '../../css/g/ga9tj3sth.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e39ud6bwf"/><path class="ga9tj3sth"/>`,
		"fallback": "carbon:navaid-vor",
	});
}

export default Component;
