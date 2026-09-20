import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj32hac5p.css';
import '../../css/b/bdvnvrbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj32hac5p"/><path class="bdvnvrbgq"/>`,
		"fallback": "token:ubsn",
	});
}

export default Component;
