import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqbma1f2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqbma1f2u"/>`,
		"fallback": "vadivam:rectangle-vertical",
	});
}

export default Component;
