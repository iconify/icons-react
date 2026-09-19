import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4m4zn7_l.css';
import '../../css/v/vawhvpbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4m4zn7_l"/><path clip-rule="evenodd" class="vawhvpbke"/>`,
		"fallback": "basil:user-block-solid",
	});
}

export default Component;
