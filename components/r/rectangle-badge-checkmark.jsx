import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdsikoiqu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdsikoiqu"/>`,
		"fallback": "f7:rectangle-badge-checkmark",
	});
}

export default Component;
