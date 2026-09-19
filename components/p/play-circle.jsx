import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyddhdbvg.css';
import '../../css/y/yr5bhhobf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyddhdbvg"/><path class="yr5bhhobf"/>`,
		"fallback": "foundation:play-circle",
	});
}

export default Component;
