import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ydu_bpz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8ydu_bpz"/>`,
		"fallback": "streamline:nature-ecology-rice-field-sun-rise-set-field-crop-produce-farm",
	});
}

export default Component;
