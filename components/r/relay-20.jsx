import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhixubcci.css';
import '../../css/b/b98id3jfi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhixubcci"/><path class="b98id3jfi"/>`,
		"fallback": "energy-icons:relay-20",
	});
}

export default Component;
