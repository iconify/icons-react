import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3f2ys1ud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3f2ys1ud"/>`,
		"fallback": "gravity-ui:logo-yandex-ai-studio",
	});
}

export default Component;
