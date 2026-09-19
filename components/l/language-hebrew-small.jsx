import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfe39lxep.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfe39lxep"/>`,
		"fallback": "dinkie-icons:language-hebrew-small",
	});
}

export default Component;
