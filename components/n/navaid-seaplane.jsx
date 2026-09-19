import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0y7ydbid.css';
import '../../css/c/c4j2u85_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0y7ydbid"/><path class="c4j2u85_n"/>`,
		"fallback": "carbon:navaid-seaplane",
	});
}

export default Component;
