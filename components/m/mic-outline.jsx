import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq_3n607q.css';
import '../../css/n/nblq3cbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq_3n607q"/><path class="nblq3cbsn"/>`,
		"fallback": "eva:mic-outline",
	});
}

export default Component;
