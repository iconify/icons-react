import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/ain8nj.css';
import '../../css/f/f6m63a.css';
import '../../css/f/f2fjgc.css';
import '../../css/s/so-from-62.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ain8nj"/><path class="a0m25c f6m63a"/><path class="a0m25c f2fjgc"/>`,
		"fallback": "line-md:phone-remove",
	});
}

export default Component;
