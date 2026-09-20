import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lfhhoabsl.css';
import '../../css/b/b5ogk12xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lfhhoabsl"/><path class="b5ogk12xe"/></g>`,
		"fallback": "streamline-ultimate:movie-cinema-watch",
	});
}

export default Component;
