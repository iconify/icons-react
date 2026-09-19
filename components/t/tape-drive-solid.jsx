import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdr6idi7u.css';
import '../../css/r/rpykv1bud.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdr6idi7u"/><path class="rpykv1bud"/>`,
		"fallback": "clarity:tape-drive-solid",
	});
}

export default Component;
