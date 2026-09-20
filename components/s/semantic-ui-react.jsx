import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmkhx12lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmkhx12lh"/>`,
		"fallback": "thesvg-color:semantic-ui-react",
	});
}

export default Component;
