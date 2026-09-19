import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rni7dhh3o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rni7dhh3o"/>`,
		"fallback": "ant-design:tag-fill",
	});
}

export default Component;
