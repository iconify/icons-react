import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxlpx8b1j.css';
import '../../css/i/ibt_a3b5u.css';
import '../../css/x/x2yjolbgz.css';
import '../../css/u/ukoks6jxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxlpx8b1j"/><path class="ibt_a3b5u"/><path class="x2yjolbgz"/><path class="ukoks6jxa"/>`,
		"fallback": "solar:sticker-smile-circle-bold-duotone",
	});
}

export default Component;
