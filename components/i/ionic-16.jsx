import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kk2albseo.css';
import '../../css/b/bcz577s3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kk2albseo"/><path class="bcz577s3v"/></g>`,
		"fallback": "nonicons:ionic-16",
	});
}

export default Component;
