import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdx4y4vma.css';
import '../../css/r/rslfarb6v.css';
import '../../css/h/h9hstt17t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdx4y4vma"/><path class="rslfarb6v"/><path class="h9hstt17t"/>`,
		"fallback": "stash:private-content-solid",
	});
}

export default Component;
