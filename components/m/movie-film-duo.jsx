import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/c/c3jne8b-d.css';
import '../../css/p/pmc-qsv6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="c3jne8b-d"/><path class="pmc-qsv6v"/></g>`,
		"fallback": "streamline-kameleon-color:movie-film-duo",
	});
}

export default Component;
