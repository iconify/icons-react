import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-nxv0dia.css';
import '../../css/z/zpnsvrb0o.css';
import '../../css/j/je9dnt2mz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-nxv0dia"/><path class="zpnsvrb0o"/><path class="je9dnt2mz"/>`,
		"fallback": "energy-icons:lightning-protection-48",
	});
}

export default Component;
