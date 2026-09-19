import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rojvpmb6a.css';
import '../../css/j/jy3p094dk.css';
import '../../css/j/j_7wf_9wv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rojvpmb6a"/><path class="jy3p094dk"/><path class="j_7wf_9wv"/>`,
		"fallback": "carbon:study-previous",
	});
}

export default Component;
