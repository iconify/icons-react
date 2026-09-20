import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnv8dyrhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnv8dyrhp"/>`,
		"fallback": "pixelarticons:snowflake-solid",
	});
}

export default Component;
