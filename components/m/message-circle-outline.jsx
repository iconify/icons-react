import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dftf9rvck.css';
import '../../css/a/a11bti4rf.css';
import '../../css/s/stjv0pdcv.css';
import '../../css/p/pmr9h6bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dftf9rvck"/><circle class="a11bti4rf"/><circle class="stjv0pdcv"/><path class="pmr9h6bii"/>`,
		"fallback": "eva:message-circle-outline",
	});
}

export default Component;
