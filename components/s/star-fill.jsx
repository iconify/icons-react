import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xugmi0cit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xugmi0cit"/>`,
		"fallback": "gravity-ui:star-fill",
	});
}

export default Component;
