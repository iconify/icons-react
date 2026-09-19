import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpgx4vb3u.css';
import '../../css/b/bdkmogxxu.css';
import '../../css/d/d2rrvbcjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpgx4vb3u"/><path class="bdkmogxxu"/><path class="d2rrvbcjd"/>`,
		"fallback": "carbon:run",
	});
}

export default Component;
