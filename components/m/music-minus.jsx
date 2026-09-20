import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be7rzowhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be7rzowhk"/>`,
		"fallback": "tabler:music-minus",
	});
}

export default Component;
