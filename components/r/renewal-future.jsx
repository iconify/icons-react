import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3sis9-yk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3sis9-yk"/>`,
		"fallback": "fluent-mdl2:renewal-future",
	});
}

export default Component;
