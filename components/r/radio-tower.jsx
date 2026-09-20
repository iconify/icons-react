import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahur8ibka.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahur8ibka"/>`,
		"fallback": "octicon:radio-tower",
	});
}

export default Component;
