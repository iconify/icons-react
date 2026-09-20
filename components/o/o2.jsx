import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vym_656yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vym_656yq"/>`,
		"fallback": "thesvg-color:o2",
	});
}

export default Component;
