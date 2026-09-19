import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upsw8zbeh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upsw8zbeh"/>`,
		"fallback": "fluent-emoji-high-contrast:open-file-folder",
	});
}

export default Component;
