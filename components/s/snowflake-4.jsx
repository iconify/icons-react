import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeulqbctk.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeulqbctk"/>`,
		"fallback": "fontisto:snowflake-4",
	});
}

export default Component;
