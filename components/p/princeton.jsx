import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9rvihb5y.css';
import '../../css/t/tr21_z34u.css';
import '../../css/f/fijnidtww.css';

const viewBox = {"width":89.541,"height":102.594};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9rvihb5y"/><path class="tr21_z34u"/><path class="fijnidtww"/>`,
		"fallback": "thesvg-color:princeton",
	});
}

export default Component;
