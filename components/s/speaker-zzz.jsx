import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpgd2ibzg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpgd2ibzg"/>`,
		"fallback": "f7:speaker-zzz",
	});
}

export default Component;
