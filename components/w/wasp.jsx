import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7ifnpa_v.css';
import '../../css/c/cqaf674jx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7ifnpa_v"/><path class="cqaf674jx"/>`,
		"fallback": "devicon:wasp",
	});
}

export default Component;
