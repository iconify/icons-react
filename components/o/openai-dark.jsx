import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abt74tbzt.css';

const viewBox = {"width":354.674,"height":354.674,"left":180.5,"top":180.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abt74tbzt"/>`,
		"fallback": "thesvg-color:openai-dark",
	});
}

export default Component;
