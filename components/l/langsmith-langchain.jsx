import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqajjpk8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqajjpk8q"/>`,
		"fallback": "thesvg-color:langsmith-langchain",
	});
}

export default Component;
