import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1pyb518k.css';
import '../../css/b/bavhjmbgw.css';
import '../../css/k/kruzn2_tt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1pyb518k"/><path class="bavhjmbgw"/><path class="kruzn2_tt"/>`,
		"fallback": "vaadin:money-exchange",
	});
}

export default Component;
