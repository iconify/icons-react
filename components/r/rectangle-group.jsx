import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a62p-mlxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a62p-mlxg"/>`,
		"fallback": "heroicons-outline:rectangle-group",
	});
}

export default Component;
