import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/a6fyc854u.css';
import '../../css/g/gur64ab5o.css';
import '../../css/p/pwltgsi8j.css';
import '../../css/a/a32feabld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="a6fyc854u"/><path class="gur64ab5o"/><path class="pwltgsi8j"/><path class="a32feabld"/></g>`,
		"fallback": "streamline-sharp-color:pen-tool",
	});
}

export default Component;
