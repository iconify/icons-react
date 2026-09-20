import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlhue_74y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlhue_74y"/>`,
		"fallback": "thesvg-color:sao-paulo-metro",
	});
}

export default Component;
