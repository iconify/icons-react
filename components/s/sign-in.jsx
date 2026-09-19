import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apiedpb5x.css';

const viewBox = {"width":1536,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apiedpb5x"/>`,
		"fallback": "fa:sign-in",
	});
}

export default Component;
