import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvzbimzzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvzbimzzc"/>`,
		"fallback": "thesvg-color:react-table",
	});
}

export default Component;
