import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjahfzb-f.css';
import '../../css/n/nb1ykgawv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjahfzb-f"/><path class="nb1ykgawv"/>`,
		"fallback": "famicons:leaf-sharp",
	});
}

export default Component;
