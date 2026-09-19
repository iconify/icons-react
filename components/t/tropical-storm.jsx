import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leuvwevba.css';
import '../../css/i/i4nfj-f2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leuvwevba"/><path class="i4nfj-f2n"/>`,
		"fallback": "carbon:tropical-storm",
	});
}

export default Component;
