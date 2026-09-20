import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/f/fzr6uv.css';
import '../../css/w/wa90th.css';
import '../../css/s/so-from-50.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c fzr6uv"/><path class="a0m25c wa90th"/>`,
		"fallback": "line-md:laptop",
	});
}

export default Component;
