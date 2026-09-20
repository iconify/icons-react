import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/u/udwt2i.css';
import '../../css/z/zwfx-h.css';
import '../../css/s/so-from-40.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c udwt2i"/><path class="a0m25c zwfx-h"/>`,
		"fallback": "line-md:search",
	});
}

export default Component;
