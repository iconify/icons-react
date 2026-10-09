import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs_xbna8j.css';
import '../../css/a/an6ptbjph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs_xbna8j"/><path class="an6ptbjph"/>`,
		"fallback": "energy-icons:speaker-20",
	});
}

export default Component;
