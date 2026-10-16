import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twj580cwe.css';
import '../../css/z/zfu5nqcgn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twj580cwe"/><path class="zfu5nqcgn"/>`,
		"fallback": "energy-icons:pipeline-pig-20",
	});
}

export default Component;
