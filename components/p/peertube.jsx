import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7trfy.css';
import '../../css/y/yfo60c.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-tbwzce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOgwoJbQI"><path class="g7trfy"/><path class="yfo60c"/></mask></defs><path mask="url(#SVGOgwoJbQI)" class="botfzx"/>`,
		"fallback": "line-md:peertube",
	});
}

export default Component;
