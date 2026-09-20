import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpju4dvus.css';
import '../../css/v/v1aw9_kpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpju4dvus"/><path class="v1aw9_kpp"/>`,
		"fallback": "material-icon-theme:php-elephant",
	});
}

export default Component;
