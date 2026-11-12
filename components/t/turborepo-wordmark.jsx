import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_zymqb3v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_zymqb3v"/>`,
		"fallback": "devicon:turborepo-wordmark",
	});
}

export default Component;
